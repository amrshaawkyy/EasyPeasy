package com.easypeazy.API.controllers;

import com.easypeazy.Domain.Interfaces.IUserService;
import com.easypeazy.Domain.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class HomeController {
    @Autowired
    private IUserService userService;
    @PostMapping(path = "/login" ,consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity login(@RequestBody User user) {
       User currentUSer = userService.retrieveUserByUserNameAndPassword(user.getUserName(), user.getPassword());
        if (currentUSer != null)
        {
            return new ResponseEntity<>(currentUSer, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity createRecipe(@RequestBody User user) {
        userService.createUser(user);
        User newUser = userService.retrieveUserByUserNameAndPassword(user.getUserName(), user.getPassword());
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
}
