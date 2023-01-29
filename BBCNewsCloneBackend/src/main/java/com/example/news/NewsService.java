package com.example.news;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class NewsService {
    private final NewsRepository newsRepository;
    @Autowired
    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    public List<News> getNews() {
        return newsRepository.findAll();
    }
    public List<News> getNewsByCategory(String category) {
        return newsRepository.findNewsByCategory(category);
    }
    public void addNews(News news) {
        newsRepository.save(news);
    }
    public void deleteNews(Integer id) {
        boolean exists = newsRepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException(
                    "News with id " + id + " does not exists"
            );
        }
        newsRepository.deleteById(id);
    }
    @Transactional
    public void updateNews(Integer id, String title, String description) {
        News news = newsRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "News with id " + id + " does not exists"
                ));
        if(title != null && title.length()>0 && !Objects.equals(news.getTitle(), title)) {
            news.setTitle(title);
        }
        if(description != null && description.length()>0 && !Objects.equals(news.getDescription(), description)) {
            news.setDescription(description);
        }
    }
}
