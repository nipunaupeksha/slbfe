package com.nsbm.slbfe.repository;

import com.nsbm.slbfe.model.Nic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NicRepository extends JpaRepository<Nic, Integer> {
}
