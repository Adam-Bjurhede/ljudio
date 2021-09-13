import { nanoid } from 'nanoid';
import { Playlists } from '../models/Playlist.js';

export async function createPlaylist(req, res) {
  try {
    // Each playlist getting an unique ID
    const id = nanoid();

    // ID of the currently logged in user
    const userId = req.obj.id;

    // Title for the playlist
    const title = req.body.title;

    // Complete playlist object to store in database
    const playList = { id, userId, title };

    // Store playlist in database
    await Playlists.CreatePlaylist(playList);

    return res.status(201).json({ success: true });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false });
  }
}

export async function getAllUserPlaylists(req, res) {
  try {
    // User id from middleware
    const userId = req.obj.id;

    //Gets all playlists from one user
    const userPlaylists = await Playlists.GetAllUserPlaylists(userId);

    return res.status(200).json({ success: true, userPlaylists });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
}

export async function saveSongToUserPlaylist(req, res) {
  try {
    // videoId and playlistId from frontend
    const songInfo = req.body;

    songInfo.id = nanoid();

    // Saves the song to playlist.
    await Playlists.SaveSongToPlaylist(songInfo);

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
}