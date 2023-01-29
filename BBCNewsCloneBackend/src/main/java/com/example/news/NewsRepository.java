package com.example.news;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NewsRepository extends JpaRepository<News, Integer> {
    @Query("SELECT s FROM News s WHERE s.category = ?1")
    List<News> findNewsByCategory(String category);
}
