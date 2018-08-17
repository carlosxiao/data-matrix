package com.enc.data.enums;

public enum ErrorCode {
	
	ZK_NO_NODE("1001","节点不存在"),
    ZK_NODE_EXIST("1002" , "节点已经存在"),
    ZK_INTERRUPTED_ERROR("1003" , "内部异常"),
    ZK_INTERNAL_ERROR("1004" , "内部异常"),
    ZK_CONNECTION_ERROR("1005" , "链接失败"),
    ZK_PARSE_CLUSTER_ERROR("1007" , "解析zookerper集群地址失败"),
    GEN_INTERNAL_ERROR("1008" , "内部错误");
	
	private String code;
    private String message;

    ErrorCode(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
