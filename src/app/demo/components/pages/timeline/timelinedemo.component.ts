import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeIcons, PrimeNGConfig } from 'primeng/api';

@Component({
    templateUrl: './timelinedemo.component.html',
    styleUrls: ['./timelinedemo.scss']
})
export class TimelineDemoComponent implements OnInit {

    events1: any[] = [];

    events2: any[] = [];
    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}
    ngOnInit(): void {
        
    }
    onUpload(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

}
