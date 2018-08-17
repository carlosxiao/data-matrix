package com.enc.data.exception;

/**
 * Created by CarlosXiao on 14/7/2016-21:33.
 */
public class DataException extends RuntimeException{

    private String code;

    private String message;

    public DataException(){};

    public DataException(final String code, final String message) {
        super(message);
        this.code = code;
        this.message = message;

    }

    public DataException(final String code, final Throwable t) {
        super(code , t);
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
