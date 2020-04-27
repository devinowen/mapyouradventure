import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { LatLng } from '../../components/Map/Map';

interface EmailPostParams {
  name: string;
  email: string;
  title?: string;
  text?: string;
  notes?: string;
  zoom: number;
  latLng: LatLng;
  boxSize: number;
}

const EMAIL_NAME = process.env.EMAIL_NAME;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      res.statusCode = 200;
      res.end('MYA emailer running');
      break;

    case 'POST':
      const {
        name,
        email,
        title,
        text,
        notes,
        zoom,
        latLng,
        boxSize
      }: EmailPostParams = req.body;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
          user: EMAIL_NAME,
          pass: EMAIL_PASSWORD,
        }
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'ian@mapyouradventure.com',
        subject: 'New custom map request',
        text: `
        Custom map request from ${name}.

        Name: ${name}
        Email: ${email}

        Map Tile: ${title}
        Map Text: ${text}
        Notes: ${notes}

        Map Coordinates
        https://www.google.com/maps/@${latLng.lat},${latLng.lng},${zoom}z

        Lat: ${latLng.lat}
        Long: ${latLng.lng}
        Zoom: ${zoom}
        Box Size: ${boxSize} (${boxSize*boxSize} sq. px)
        `
      };

      try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json(info);
        return info.response;
      } catch (error) {
        throw error;
      }

    default:
      res.statusCode = 405;
      res.end('Only GET, POST requests allowed.');
      break;
  }
}
