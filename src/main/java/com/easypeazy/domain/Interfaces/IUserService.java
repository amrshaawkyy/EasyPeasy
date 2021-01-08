package com.easypeazy.Domain.Interfaces;

import com.easypeazy.Domain.Models.User;

public interface IUserService {

    User retrieveUserByUserNameAndPassword(String userName, String password);

    void createUser(User user);

    void deleteUserById(int id);
}
