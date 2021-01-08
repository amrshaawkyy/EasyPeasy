package com.easypeazy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@SpringBootApplication
@EnableJpaRepositories()
public class EasyPeazyApplication {

    public static void main(String[] args) {
        SpringApplication.run(EasyPeazyApplication.class, args);
    }

    @Bean
    public DataSource dataSouce() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/captsone");
        dataSource.setUsername("root");
        return dataSource;
    }
}
