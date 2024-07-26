package 과제제출_김혜수;

import java.util.Scanner;

public class 점수 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int sum=0, aver=0;
		for(int i = 1; ;i++) {
		System.out.print("정수를 입력하세요 : ");
		int num = sc.nextInt();
		if(num == 0) break;
		sum = sum + num;
		aver = sum/i;
		}
		
		System.out.printf("합계는 %d입니다. 평균은 %d입니다.",sum,aver);
	}

}
