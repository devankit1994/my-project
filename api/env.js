export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.send(`
    export const config = {
      API_URL: "${process.env.API_URL}",
      MODE: "${process.env.MODE}"
    };
  `);
}
