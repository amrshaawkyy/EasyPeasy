package com.easypeazy.Domain.Service;

import com.easypeazy.Domain.Interfaces.IUserService;
import com.easypeazy.Domain.Models.User;
import com.easypeazy.Repository.Interfaces.IUserRepository;
import com.easypeazy.Repository.Mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository _userRepository;
    @Autowired
    private UserMapper _userMapper;

    public UserService(UserMapper userMapper) {
        this._userMapper = userMapper;
    }



    @Override
    public User retrieveUserByUserNameAndPassword(String userName, String password) {
        com.easypeazy.Repository.Models.User attemptedUser = new com.easypeazy.Repository.Models.User();
        attemptedUser.setUserName(userName);
        attemptedUser.setPassword(password);
        Optional<com.easypeazy.Repository.Models.User> user = _userRepository.findOne(Example.of(attemptedUser));
        if (user.isEmpty())
        {
            return  null;
        }
        User result = _userMapper.MapToDomain(user.get());
        return result;
    }

    @Override
    public void createUser(User user) {
        com.easypeazy.Repository.Models.User dbUser = _userMapper.MapToDB(user);
        _userRepository.saveAndFlush(dbUser);
    }

    @Override
    public void deleteUserById(int id) {
        _userRepository.deleteById(id);
    }
}
