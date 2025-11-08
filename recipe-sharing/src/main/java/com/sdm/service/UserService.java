package com.sdm.service;

import com.sdm.model.User;

public interface UserService {
    public User findUserById(Long userId) throws Exception;
    public User findUserByJwt(String jwt) throws Exception;
}
