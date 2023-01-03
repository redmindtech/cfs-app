import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-photo-popup',
  templateUrl: './upload-photo-popup.component.html',
  styleUrls: ['./upload-photo-popup.component.scss']
})
export class UploadPhotoPopupComponent implements OnInit {

  selectedFileBlob: any;
  selectedFileObjectUrl: SafeUrl;
  track: any;
  isCameraPage = false;
  isImageTaken = false;
  public source: string;
  isUploadClicked: boolean = false;


  
  saas_id: any;
  selectedBookingNumber: any;
  draftCfsNo: any;
  

  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<UploadPhotoPopupComponent>,
    private _snackBar: MatSnackBar,

  ) { }

  ngOnInit(): void {
  }

  save(): void {

  }

  selectedPhoto(event: any): void {
    this.selectedFileBlob = event.files[0];
    const img =  URL.createObjectURL(event.files[0]);
    this.selectedFileObjectUrl = this.sanitizer.bypassSecurityTrustUrl(img);
  }

  uploadPhoto(): void {
    if(!this.isUploadClicked){
      this.isUploadClicked = true;
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFileBlob); 
    reader.onloadend = () => {
      let base64data: any = reader.result;           
      // this.service.uploadPhoto(base64data, this.source, this.selectedBookingNumber, this.draftCfsNo).subscribe( data => {
      //   this._snackBar.open('Image Uploaded Successfully!', 'OK', {duration: 2000});
      //   this.dialogRef.close();
      //   this.isUploadClicked = false;
      // }, err => {
      //   this._snackBar.open('Image Uploaded Failed!', 'OK', {duration: 2000});
      // });
    }
  }
  }

  openCamera(cameraView: any): void {
    this.isCameraPage = true; 
    var constraints = { video: { facingMode: "environment" }, audio: false };
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then( (stream) => {
            this.track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
  }

  captureImage(capturedPicture: any, cameraView: any, cameraOutput: any): void {
    capturedPicture.width = cameraView.videoWidth;
    capturedPicture.height = cameraView.videoHeight;
    capturedPicture.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = capturedPicture.toDataURL("image/webp");
    this.selectedFileObjectUrl = capturedPicture.toDataURL("image/webp");
    capturedPicture.toBlob( (blob: any) => this.selectedFileBlob = blob);
    this.isImageTaken = true;
    this.isCameraPage = false; 
  }

}
