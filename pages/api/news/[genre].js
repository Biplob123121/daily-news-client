import { news } from "../../../data/news";

export default function handler(req, res) {
    const {genre} = req.query;
    const filter = news.filter(n => n.genre === genre);
    res.status(200).json(filter);
  }