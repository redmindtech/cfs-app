import { Component, OnInit, Sanitizer } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LoadingApiService } from '../service/loading-api.service';

@Component({
  selector: 'app-upload-photo-popup-loading',
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
  subjob_no: any;

  job_no: any;
  house_no: any;
  container_no: any;
  segment_code: any;
  saas_id: any;
  selectedContainer: any;
  selectedHbl: any;
  isLoading = false;


  constructor(
    private sanitizer: DomSanitizer,
    private service: LoadingApiService,
    public dialogRef: MatDialogRef<UploadPhotoPopupComponent>,
    private _snackBar: MatSnackBar
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
    let subjobNo = this.subjob_no;
    if(!this.isUploadClicked){
      this.isUploadClicked = true;
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFileBlob); 
    reader.onloadend = () => {
      let base64data: any = reader.result; 
      this.isLoading = true;          
      this.service.uploadPhoto(base64data, this.source, this.selectedContainer, this.selectedHbl, subjobNo).subscribe( data => {
        this.isLoading = false;
        this._snackBar.open('Image Uploaded Successfully!', 'OK', {duration: 2000});
        this.dialogRef.close();
        this.isUploadClicked = false;
      }, err => {
        this._snackBar.open('Image Uploaded Failed!', 'OK', {duration: 2000});
      });
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
