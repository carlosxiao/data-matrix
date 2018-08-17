package com.enc.data.service;

import com.enc.data.config.AppConfig;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * @author mingchen.xiao
 */
@Service
public class DataService {
    private Logger logger = LoggerFactory.getLogger(getClass());


    @Resource
    private AppConfig appConfig;

    public void importData(Workbook workbook) {
        //取第一个sheet
        Sheet sheet = workbook.getSheetAt(0);
        Iterator<Row> rowIterator = sheet.rowIterator();
        List<Map<String , Object>> dataList = new ArrayList<>();
        while (rowIterator.hasNext()) {
            Row row = rowIterator.next();
            //获取行号 从0开始
            int rowNum = row.getRowNum();
            if (null == row) break;
            Map<String , Object> map = new HashMap<>();
            logger.debug("开始处理第{}行数据");
            Cell cell = row.getCell(1);
            map.put("userName" , cell.getStringCellValue());
            cell = row.getCell(2);
            map.put("realName" , cell.getStringCellValue());
            cell = row.getCell(3);
            map.put("mobile" , cell.getStringCellValue());
            System.err.println("row:" + rowNum + " , data: " + map);
        }
    }
}
