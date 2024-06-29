package com.fon.file_storage.service.impl;

import com.fon.file_storage.service.FileStorageService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Objects;
import java.util.UUID;

@Service
public class FileStorageServiceImpl implements FileStorageService {
    private final Path fileStoragePath;
    private final String fileStorageLocation;

    public FileStorageServiceImpl() {
        String currentWorkingDirectory = System.getProperty("user.dir");

        this.fileStorageLocation = currentWorkingDirectory + "/file-storage/src/main/resources/storage";

        fileStoragePath = Paths.get(fileStorageLocation).toAbsolutePath().normalize();

        try {
            Files.createDirectories(fileStoragePath);
        } catch (IOException e) {
            throw new RuntimeException("Unable to create storage directory.");
        }
    }

    @Override
    public String upload(MultipartFile file) {
        String fileName = UUID.randomUUID()
                + "."
                + Objects.requireNonNull(file.getOriginalFilename()).split("\\.")[1];

        Path filePath = Paths.get(fileStoragePath + "\\" + fileName);

        try {
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException ex) {
            throw new RuntimeException("Unable to save file to storage.");
        }

        return fileName;
    }

    @Override
    public Resource download(String fileName) {
        Path path = Paths.get(fileStorageLocation).toAbsolutePath().resolve(fileName);

        Resource resource;

        try {
            resource = new UrlResource(path.toUri());

        } catch (MalformedURLException ex) {
            throw new RuntimeException("Unable to read file from storage.");
        }

        return resource;
    }
}
