package com.easypeazy.Repository.Models;


import javax.persistence.*;

@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue
    @Column(name="id", columnDefinition="text")
    private Integer Id;

    @Column(name="fullname", columnDefinition="text")
    private String FullName;

    @Column(name="email", columnDefinition="text")
    private String Email;

    @Column(name="username", columnDefinition="text")
    private String UserName;

    @Column(name="password", columnDefinition="text")
    private String Password;


    @Column(name="phone", columnDefinition="text")
    private String Phone;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getFullName() {
        return FullName;
    }

    public void setFullName(String fullName) {
        FullName = fullName;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String phone) {
        Phone = phone;
    }

}