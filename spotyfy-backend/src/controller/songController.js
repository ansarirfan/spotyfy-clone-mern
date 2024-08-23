import { v2 as cloudinary } from "cloudinary";
import songModel from "../modles/songModel.js";

const addSong = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.name;
    const album = req.body.album;
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];
    const audioUplaod = await cloudinary.uploader.upload(audioFile.path, {resource_type: "video"});
    const imageUplaod = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image"});
    const duration = `${Math.floor(audioUplaod.duration / 60)}:${Math.floor(audioUplaod.duration % 60)}`;

    const songData = {
      name,
      desc,
      album,
      image: imageUplaod.secure_url,
      file: audioUplaod.secure_url,
      duration
    };

    const song = songModel(songData);
    await song.save();

    res.json({ success: true, message: "song added" });
  } catch (error) {
    res.json({ success: false });
  }
};

//listing song
    const listSong = async (req, res) => {
        try {
            const allSong = await songModel.find({});
            res.json({success:true, songs: allSong});

        } catch (error) {
            res.json({ success: false });
        }
    };


    // removed songs
    const removeSong = async (req, res)=>{
      try {
          await songModel.findByIdAndDelete(req.body.id);
          res.json({success:true, message: 'song removed !'})

      } catch (error) {
        res.json({ success: false });
      }
    }

   export { addSong, listSong , removeSong};
