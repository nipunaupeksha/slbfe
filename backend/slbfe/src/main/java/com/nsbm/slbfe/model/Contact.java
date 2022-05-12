package com.nsbm.slbfe.model;

public class Contact {

    private String name;
    private String email;
    private String phone;
    private String mobile;
    private String address;

    public Contact(String name, String email, String phone, String mobile, String address) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.mobile = mobile;
        this.address = address;
    }

    public Contact() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
