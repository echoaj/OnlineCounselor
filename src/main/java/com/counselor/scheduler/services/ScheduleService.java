package com.counselor.scheduler.services;
import org.springframework.stereotype.Service;

import java.util.HashMap;


@Service
public class ScheduleService {

    HashMap<String, int[]> rankings = new HashMap<>();
    int[][] array = new int[3][5];

    public ScheduleService() {
        int baseRank = 10;
        createArray();
        printArray();
        rankings.put("Math", new int[]{0, baseRank});
        rankings.put("English", new int[]{0, baseRank});
        rankings.put("History", new int[]{0, baseRank});
        rankings.put("Foreign Language", new int[]{0, baseRank});
        rankings.put("PE", new int[]{0, baseRank});
        rankings.put("Life Science", new int[]{0, baseRank});
        rankings.put("Physical Science", new int[]{0, baseRank});
        rankings.put("Elective", new int[]{0, baseRank});
        rankings.put("Free", new int[]{0, baseRank});

    }
    public int[][] getSchedule() {
        System.out.println("GET SCHEDULE");
        return array;
    }

    public void createArray() {
        int num = 1;
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[i].length; j++) {
                array[i][j] = num;
                num++;
            }
        }
    }

    public void printArray() {
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[i].length; j++) {
                System.out.print(array[i][j] + " ");
            }
            System.out.println();
        }
    }

}
