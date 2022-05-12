package com.nsbm.slbfe.model;

public class ValidationObj {
    private String email;
    private String password;

    public ValidationObj(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public ValidationObj() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
