-- Top 10 des utilisateurs actifs
SELECT u.id, u.name, COUNT(o.id) AS total_orders
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.active = TRUE AND u.created_at > '2026-01-01'
GROUP BY u.id, u.name
ORDER BY total_orders DESC
LIMIT 10;

CREATE TABLE products (
  id INT PRIMARY KEY,
  label VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) DEFAULT 0.00
);
