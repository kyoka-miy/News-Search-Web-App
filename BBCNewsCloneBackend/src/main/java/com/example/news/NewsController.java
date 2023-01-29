package com.example.news;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/v1/news")
@CrossOrigin
public class NewsController {
    private final NewsService newsService;
    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }
    @GetMapping
    public List<News> getNews() {
        return newsService.getNews();
    }
    @GetMapping("/category/{category}")
    public List<News> getNewsByCategory(@PathVariable("category") String category) {
        return this.newsService.getNewsByCategory(category);
    }
    @PostMapping("/add")
    public String addNews(@RequestBody News news) {
        newsService.addNews(news);
        return "New news is added";
    }
    @DeleteMapping(path="/delete/{newsId}")
    public void deleteNews(@PathVariable("newsId") Integer newsId) {
        newsService.deleteNews(newsId);
    }
    @PutMapping(path="/put/{newsId}")
    public void updateNews(
            @PathVariable("newsId") Integer newsId,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String description
    ) {
        newsService.updateNews(newsId, title, description);
    }
}
