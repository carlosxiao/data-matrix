package com.enc.data.controller;

import com.enc.data.exception.DataException;
import com.enc.data.service.DataService;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;

/**
 * Created by mingchen.xiao on 2016/6/28.
 */

@RequestMapping("/data")
@RestController
public class DataController {

    private Logger logger = LoggerFactory.getLogger(DataController.class);

    @Resource
    private DataService dataService;

    @RequestMapping(value = "upload" , method = RequestMethod.POST)
    public void upload(@RequestParam(value = "file" , required = false)MultipartFile file) {
        Workbook workbook;
        try {
            String fileName = file.getOriginalFilename();
            if (fileName.endsWith(".xls"))
                workbook = new HSSFWorkbook(file.getInputStream());
            else if (fileName.endsWith(".xlsx"))
                workbook = new XSSFWorkbook(file.getInputStream());
            else {
                throw new DataException();
            }
            dataService.importData(workbook);

        } catch (Exception e) {
            e.printStackTrace();
            logger.error("upload file error {}" , e);
        }
    }

}
