// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TrendPrediction {
    struct Trend {
        string platform;
        string trendData;
        uint256 timestamp;
    }

    mapping(uint256 => Trend) public trends;
    uint256 public trendCount;

    event TrendStored(uint256 indexed id, string platform, string trendData, uint256 timestamp);

    function storeTrend(string memory _platform, string memory _trendData) external {
        trends[trendCount] = Trend(_platform, _trendData, block.timestamp);
        emit TrendStored(trendCount, _platform, _trendData, block.timestamp);
        trendCount++;
    }

    function getTrend(uint256 _id) external view returns (string memory, string memory, uint256) {
        require(_id < trendCount, "Invalid Trend ID");
        Trend storage trend = trends[_id];
        return (trend.platform, trend.trendData, trend.timestamp);
    }
}