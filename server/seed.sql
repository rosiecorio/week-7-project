CREATE TABLE IF NOT EXISTS genres (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS games (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  title VARCHAR(255) NOT NULL,
  review TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS games_genres (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  game_id INT REFERENCES games(id),
  genre_id INT REFERENCES genres(id)
)

INSERT INTO games (title, review) VALUES
('Animal Crossing', 'The game offers a rich single-player experience where you can design your island, engage with charming animal villagers, and participate in various activities'),

('The Flame in the Flood', 'The Flame in the Flood is a decent survival sim! I loved the aesthetic and the twist on the game - instead of constructing a base, you upgrade a raft that you use to navigate down along a river until you die, or if you progress in the campaign, get an ending.'),

('The Binding of Isaac', 'A completely genuine game! not only entertaining,but the lore is so interesting! I love this game and watched it grow up along with me; from the original Tboi(The binding of Isaac) to now the somewhat new, Repentance.')

INSERT INTO genres (name) VALUES 
('Simulation'),
('Adventure'),
('Shooter'),
('Action'),
('Survival')

INSERT INTO games_genres (game_id, genre_id) VALUES 
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(2, 5),
(2, 4),
(3, 2),
(3, 3),
(3, 4)