package com.nsbm.slbfe.repository;

import com.nsbm.slbfe.model.Qualification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QualificationRepository extends JpaRepository<Qualification, Integer> {
}
