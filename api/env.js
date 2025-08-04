export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.send(`
    export const env = {
      API_URL: "${process.env.API_URL}",
      MODE: "${process.env.MODE}"
    };
  `);
}
