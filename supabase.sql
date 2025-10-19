CREATE TABLE subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE
);

CREATE POLICY "Enable insert for subscribers"
  ON subscribers
  FOR INSERT
  TO public
  USING (true)
  WITH CHECK (true);