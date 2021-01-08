package com.easypeazy.Repository.Mapper;

import com.easypeazy.Domain.Models.User;
import org.springframework.stereotype.Repository;

@Repository
public class UserMapper {

    public User MapToDomain(com.easypeazy.Repository.Models.User user)
    {
        User u =  new User();
        u.setId(user.getId());
        u.setEmail(user.getEmail());
        u.setFullName(user.getFullName());
        u.setUserName(user.getUserName());
        u.setPassword(user.getPassword());
        u.setPhone(user.getPhone());
        return  u;
    }


    public com.easypeazy.Repository.Models.User MapToDB(User user)
    {
        com.easypeazy.Repository.Models.User u =  new com.easypeazy.Repository.Models.User();
        u.setEmail(user.getEmail());
        u.setFullName(user.getFullName());
        u.setUserName(user.getUserName());
        u.setPassword(user.getPassword());
        u.setPhone(user.getPhone());
        return  u;
    }
}
