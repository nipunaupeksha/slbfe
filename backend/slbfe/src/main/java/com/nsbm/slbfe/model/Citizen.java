package com.nsbm.slbfe.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "citizens")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Citizen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "sur_name")
    private String surName;
    @Column(name = "gender")
    private String gender;
    @Column(name = "date_of_birth")
    private String dateOfBirth;
    @Column(name = "age")
    private int age;
    @Column(name = "profession")
    private String profession;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "passport_id")
    private Passport passport;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "birth_certificate_id")
    private BirthCertificate birthCertificate;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "nic_id")
    private Nic nic;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "qc_id", referencedColumnName = "id")
    List<Qualification> qualificationList = new ArrayList<>();

    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "affliation")
    private String affiliation;
    @Column(name = "phone")
    private String phone;
    @Column(name = "mobile")
    private String mobile;
    @Column(name = "address")
    private String address; //consist of no. & street name, city, district, province, postal code, country.

    public Citizen(String firstName, String lastName, String surName, String gender, String dateOfBirth, int age, String profession, String affiliation, Passport passport, BirthCertificate birthCertificate, Nic nic, String email, String password, String phone, String mobile, String address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.surName = surName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
        this.profession = profession;
        this.affiliation = affiliation;
        this.passport = passport;
        this.birthCertificate = birthCertificate;
        this.nic = nic;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.mobile = mobile;
        this.address = address;
    }

    public Citizen() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public Passport getPassport() {
        return passport;
    }

    public void setPassport(Passport passport) {
        this.passport = passport;
    }

    public BirthCertificate getBirthCertificate() {
        return birthCertificate;
    }

    public void setBirthCertificate(BirthCertificate birthCertificate) {
        this.birthCertificate = birthCertificate;
    }

    public Nic getNic() {
        return nic;
    }

    public void setNic(Nic nic) {
        this.nic = nic;
    }

    public List<Qualification> getQualificationList() {
        return qualificationList;
    }

    public void setQualificationList(List<Qualification> qualificationList) {
        this.qualificationList = qualificationList;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAffiliation() {
        return affiliation;
    }

    public void setAffiliation(String affiliation) {
        this.affiliation = affiliation;
    }
}
