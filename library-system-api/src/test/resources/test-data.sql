# INSERT INTO address_t (LINE_ONE, CITY, POST_CODE, COUNTRY)
# VALUES
#     ( '43 Jenson street', 'Nottingham', 'NG6 5TY','UK' ),
#     ( '65 Broadson street', 'Nottingham', 'NG8 9TY','UK' ),
#     ( '73 Rhysen street', 'Nottingham', 'NG76OY','UK' );
#
#
#
# INSERT INTO user_t (NAME, PHONE_NUMBER,EMAIL, ADDRESS_ID )
# VALUES
#     ('Drake Wesley', '07347284950', 'drakewesley@gmail.com', (SELECT id FROM address_t WHERE id = 1)),
#     ('Ed Sheeran', '07347583840', 'edsheeran@gmail.com', (SELECT id FROM address_t WHERE id = 2)),
#     ('Taylor Swift', '07347254780', 'taylorswift.com', (SELECT id FROM address_t WHERE id = 3));
#
# INSERT INTO author (name)
# VALUES
#     ('Harper Lee' ),
#     ( 'George Orwell' ),
#     ('Scott Fitzgerald' ),
#     ('Jane Austen' ),
#     ('Suzanne Collins'),
#     (' Dan Brown'),
#     (' Paulo Coelho');
#
#
# INSERT INTO book (title, author_id, genre, quantity, is_available, img_url)
# VALUES
#     ('To Kill a Mockingbird', 1, 'FICTION', 30, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/to-kill-a-mockingbird.jpg'),
#     ('1984', 2, 'FICTION', 30, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/1984.jpg'),
#     ('The Great Gatsby', 3, 'ROMANCE', 30, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/the-great-gatsby.jpg'),
#     ('Pride and Prejudice', 4, 'ACTION', 30, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/prideandprejudice.jpg'),
#     ('The Hunger Games', 5, 'SCIENTIFIC', 30, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/the-hunger-games.jpg'),
#     ('The Da Vinci Code', 6, 'FICTION', 30, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/da-vinci-codebook.jpg'),
#     ('The Alchemist', 7, 'THRILLER', 30, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/the-alchemist.jpg');
#
#
# INSERT INTO movie
# (title, lead_actors, director, screen_writer, release_date, genre, rating, quantity, is_available, img_url)
# VALUES
#     ('Titanic', 'Leonardo DiCaprio, Kate Winslet', 'James Cameron', 'James Cameron', '1997-12-19', 'ROMANCE', 7.8, 10, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/titanic.jpg'),
#     ('The Shawshank Redemption', 'Tim Robbins, Morgan Freeman', 'Frank Darabont', 'Frank Darabont', '1994-09-23', 'ACTION', 9.3, 15, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/the-shawshank-redemption.jpg'),
#     ('The Dark Knight', 'Christian Bale, Heath Ledger', 'Christopher Nolan', 'Christopher Nolan, Jonathan Nolan', '2008-07-18', 'ACTION', 9.0, 12, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/the-dark-knight.jpg'),
#     ('Inception', 'Leonardo DiCaprio, Joseph Gordon-Levitt', 'Christopher Nolan', 'Christopher Nolan', '2010-07-16', 'SCIENTIFIC', 8.8, 8, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/inception.jpg'),
#     ('Forrest Gump', 'Tom Hanks, Robin Wright', 'Robert Zemeckis', 'Eric Roth', '1994-07-06', 'ROMANCE', 8.8, 20, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/forrest-gump.jpg'),
#     ('The Godfather', 'Marlon Brando, Al Pacino', 'Francis Ford Coppola', 'Mario Puzo, Francis Ford Coppola', '1972-03-24', 'THRILLER', 9.2, 18, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/the-godfather.jpg'),
#     ('Pulp Fiction', 'John Travolta, Uma Thurman', 'Quentin Tarantino', 'Quentin Tarantino', '1994-10-14', 'THRILLER', 8.9, 14, true, 'https://ls-project-books.s3.eu-west-2.amazonaws.com/pulp-fiction-po
# ster.jpg');
#
# INSERT INTO periodical (type, publication_date, periodical_name, img_url) VALUES
#                                                                               ('Magazine', '2023-01-01', 'National Geographic', 'https://ls-project-books.s3.eu-west-2.amazonaws.com/national-geographic.jpg'),
#                                                                               ('Journal', '2023-02-01', 'Nature', 'https://ls-project-books.s3.eu-west-2.amazonaws.com/nature+journal.jpg'),
#                                                                               ('Newsletter', '2023-03-01', 'The Economist Espresso', 'https://ls-project-books.s3.eu-west-2.amazonaws.com/economist-espresso.jpg'),
#    ( 'Magazine', '2023-04-15', 'National Geographic', 'https://ls-project-books.s3.eu-west-2.amazonaws.com/national-geographic.jpg'),
# ('Journal', '2023-01-12', 'Nature', 'https://ls-project-books.s3.eu-west-2.amazonaws.com/nature+journal.jpg'),
# ('Newsletter', '2023-02-20', 'The Economist Espresso', 'https://ls-project-books.s3.eu-west-2.amazonaws.com/economist-espresso.jpg');
#


