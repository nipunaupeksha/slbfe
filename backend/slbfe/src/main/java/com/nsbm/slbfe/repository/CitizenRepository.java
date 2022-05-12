package com.nsbm.slbfe.repository;

import com.nsbm.slbfe.model.Citizen;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface CitizenRepository extends JpaRepository<Citizen, Integer> {

    @Transactional
    @Query(nativeQuery = true, value = "select * from citizens c left join nic n on c.nic_id = n.id where n.nic_id = :nid limit 1")
    Optional<Citizen> findByNicId(@Param("nid") String nid);

    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "delete from citizens c left join nic n on c.nic_id = n.id where n.nic_id = :nid")
    void deleteByNicId(@Param("nid") String nid);

    @Transactional
    @Query(nativeQuery = true, value="select * from citizens where email = :email and password=:password limit 1")
    Optional<Citizen> findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
}
