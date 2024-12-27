package net.javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity   // used to specify a class as a JPA entity
@Table(name = "employees")  //specify the table details

public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // uses data based auto increment feature which will increment primary key
    private long id;

    @Column(name = "first_name" ) // if we dont do this JPA gives column name as field name ie 'firstName'
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email_id", nullable = false, unique = true)
    private String email;

}
