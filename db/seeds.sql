INSERT INTO department (name)
VALUES ("Engineering"),
       ("Product"),
       ("Sales"),
       ("People");

INSERT INTO role (title, salary, department_id)
VALUES ("Senior I", 200000.00, 1),
        ("Senior II", 500000.00, 1),
        ("Associate", 100000.00, 1),
        ("Senior Manager", 90000.00, 2),
        ("Mid I", 70000.00, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sam", "Redd", 2, NULL),
        ("Ash", "Reid", 5, 1);
