import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  imports: [CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss',
})
export class AgendaComponent {
  agendaTitle = 'Agenda';
  date = '25 October 2025';

  ceremonies = {
    morning: [
      {
        time: '06:00',
        description: 'พิธีสงฆ์',
      },
      {
        time: '07:00',
        description: 'สู่ขอ',
      },
      {
        time: '07:30',
        description: 'สวมแหวน',
      },
      {
        time: '08:00',
        description: 'สู่ขอ',
      },
      {
        time: '08:30',
        description: 'รับไหว้',
      },
      {
        time: '09:00',
        description: 'รดน้ำสังข์',
      },
      {
        time: '10:00',
        description: 'ส่งตัวเจ้าสาว',
      },
      {
        time: '11:00',
        description: 'ถวายเพลพระ',
      },
    ],
    evening: [
      {
        time: '17:30',
        description: 'ลงทะเบียน / Register',
      },
      {
        time: '18:30',
        description: 'เปิดตัวบ่าวสาว / Couple Entrance',
      },
      {
        time: '19:30',
        description: 'รินแชมเปญ / Champagne',
      },
      {
        time: '21:30',
        description: 'ปาร์ตี้! / After Party!',
      },

    ],
  };

}
