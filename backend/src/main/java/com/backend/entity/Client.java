package com.backend.entity;

import jdk.jfr.DataAmount;
import jdk.jfr.Name;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer client_id;


    String username;
    String nickname;
    String password;
    String email;
    String avatar;
    String theme;

}
