(self.webpackChunkcfs=self.webpackChunkcfs||[]).push([[466],{1466:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CargoDeliveryModule:()=>se});var o=i(8583),l=i(4655),n=i(3679),a=i(5203),s=i(7716),r=i(2238),c=i(1841),d=i(8002),u=i(2340);let g=(()=>{class e{constructor(e){this.http=e}packType(){const e={headers:new c.WM({"Content-Type":"application/x-www-form-urlencoded"})},t=new URLSearchParams;let i=window.localStorage.getItem("Token");return this.http.post(`${u.N.apiUrl}/getpack_list?user_token=${i}&username=&saas_id=LIVEFSL&search_key=`,t.toString(),e).pipe((0,d.U)(e=>{try{return e}catch(t){return e}}))}getCargoDeliveryList(e){let t=e;const i={headers:new c.WM({"Content-Type":"application/x-www-form-urlencoded"})},o=new URLSearchParams;return this.http.post(`${u.N.apiUrl}/getcargo_delivery_list?user_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkNGU1RBQjEiLCJuYmYiOjE2NzUxNjg5ODUsImV4cCI6MTcwNjcwNDk4NSwiaWF0IjoxNjc1MTY4OTg1fQ.7Ot1oaQMjkNphCPaiWp2hAizm2O9jn4smnOEBjx7pm0&username=&saas_id=LIVEFSL&search_key=${t}`,o.toString(),i).pipe((0,d.U)(e=>{try{return e}catch(t){return e}}))}getDeliveryItem(e){let t=e;const i={headers:new c.WM({"Content-Type":"application/x-www-form-urlencoded"})},o=new URLSearchParams;return this.http.post(`${u.N.apiUrl}/save_cargo_header?user_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkNGU1RBQjEiLCJuYmYiOjE2NzMzNTMxNTcsImV4cCI6MTcwNDg4OTE1NywiaWF0IjoxNjczMzUzMTU3fQ.AJ5SuHBJHTRTVefhab5u6RDVzkIb26N_hbTNbTTcZp4&segment_code=&saas_id=LIVEFSL&booking_no=${t}&draft_cfs_no=&item_desc=TEST&pack_code=BAG&customer_code=C904086&customer_name=BOSCO&driver_name=1&truck_no=1&received_qty=&volume=&weight=&cfs_note=1&marks_no=1&supplier_code=C0058059&supplier_name=RAJEN%20ODEDRA&supplier_ref=&receive_delivery=DELIVERY`,o.toString(),i).pipe((0,d.U)(e=>{try{return e}catch(t){return e}}))}SaveDeliveryItem(e,t,i){let o=t,l=i,n=e;const a={headers:new c.WM({"Content-Type":"application/x-www-form-urlencoded"})},s=new URLSearchParams;return this.http.post(`${u.N.apiUrl}/save_cargo_detail?user_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkNGU1RBQjEiLCJuYmYiOjE2NzMzNTMxNTcsImV4cCI6MTcwNDg4OTE1NywiaWF0IjoxNjczMzUzMTU3fQ.AJ5SuHBJHTRTVefhab5u6RDVzkIb26N_hbTNbTTcZp4&subjob_uid=&saas_id=LIVEFSL&booking_no=${n}&draft_cfs_no=${o}&height=1&breadth=1&length=1&received_qty=${l}&volume=0.000&weight=1& receive_delivery=DELIVERY`,s.toString(),a).pipe((0,d.U)(e=>{try{return e}catch(t){return e}}))}addDelivery(e){const t={headers:new c.WM({"Content-Type":"application/x-www-form-urlencoded"})},i=new URLSearchParams;return this.http.post(`${u.N.apiUrl}/add_item_delivery?user_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkNGU1RBQjEiLCJuYmYiOjE2NzUxNjg5ODUsImV4cCI6MTcwNjcwNDk4NSwiaWF0IjoxNjc1MTY4OTg1fQ.7Ot1oaQMjkNphCPaiWp2hAizm2O9jn4smnOEBjx7pm0&saas_id=LIVEFSL&segment_code=&booking_no=${null==e?void 0:e.BL_Booking}1&draft_cfs_no=''&sl_no=${e.Slno}&job_subjob_uid=${e.job_subjob_uid}&item_desc=${e.commodity}&pack_code=${e.pack_type}&customer_name&customer_code&driver_name=${e.Driver_Name}&truck_no=${e.Truck_No}&received_qty=${e.packages}&volume&weight&cfs_note&mark_no&supplier_code&supplier_name&supplier_ref&receive_delivery=DELIVERY`,i.toString(),t).pipe((0,d.U)(e=>{try{return e}catch(t){return e}}))}addDeliveryQty(e,t,i){console.log(e,t);const o={headers:new c.WM({"Content-Type":"application/x-www-form-urlencoded"})},l=new URLSearchParams;return this.http.post(`${u.N.apiUrl}/add_item_delivery_detail?user_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkNGU1RBQjEiLCJuYmYiOjE2NzUxNjg5ODUsImV4cCI6MTcwNjcwNDk4NSwiaWF0IjoxNjc1MTY4OTg1fQ.7Ot1oaQMjkNphCPaiWp2hAizm2O9jn4smnOEBjx7pm0&saas_id=LIVEFSL&booking_no=${e.BL_Booking}&draft_cfs_no=${i}&volume=&weight=&receive_delivery=DELIVERY&received_qty=${t}&length&breadth&height&volume`,l.toString(),o).pipe((0,d.U)(e=>{try{return e}catch(t){return e}}))}DeliveryItemComplete(e){const t={headers:new c.WM({"Content-Type":"application/x-www-form-urlencoded"})},i=new URLSearchParams;return this.http.post(`${u.N.apiUrl}/cargo_delivery?user_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkNGU1RBQjEiLCJuYmYiOjE2NzUxNjg5ODUsImV4cCI6MTcwNjcwNDk4NSwiaWF0IjoxNjc1MTY4OTg1fQ.7Ot1oaQMjkNphCPaiWp2hAizm2O9jn4smnOEBjx7pm0&saas_id=LIVEFSL&cfs_delivery_no=${e}`,i.toString(),t).pipe((0,d.U)(e=>{try{return e}catch(t){return e}}))}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(c.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=i(9470),m=i(8295),h=i(9983),v=i(1095),f=i(6627),Z=i(1769);let b=(()=>{class e{constructor(e){this.data=e}ngOnInit(){console.log(this.data)}ok(){window.location.reload()}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.WI))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-delivery-fail-status"]],decls:5,vars:1,consts:[[1,"d-flex","pb-1"],[1,"mt-2","text-danger","font-weight-bold","h6"],["mat-raised-button","","mat-dialog-close","",1,"ml-auto",3,"click"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s._uU(2),s.qZA(),s.TgZ(3,"button",2),s.NdJ("click",function(){return t.ok()}),s._uU(4,"Ok"),s.qZA(),s.qZA()),2&e&&(s.xp6(2),s.Oqu(t.data))},directives:[v.lW,r.ZT],styles:[""]}),e})();var _=i(3738);function y(e,t){if(1&e&&(s.TgZ(0,"div",3),s.TgZ(1,"div"),s.TgZ(2,"mat-card"),s.TgZ(3,"div",4),s._uU(4),s.qZA(),s.TgZ(5,"div",5),s._uU(6),s.qZA(),s.TgZ(7,"div",4),s._uU(8),s.qZA(),s.TgZ(9,"div",5),s._uU(10),s.qZA(),s.TgZ(11,"div",4),s._uU(12),s.qZA(),s.TgZ(13,"div",5),s._uU(14),s.qZA(),s.TgZ(15,"div",4),s._uU(16),s.qZA(),s.TgZ(17,"div",5),s._uU(18),s.qZA(),s.TgZ(19,"div",4),s._uU(20),s.qZA(),s.TgZ(21,"div",5),s._uU(22),s.qZA(),s.TgZ(23,"div",4),s._uU(24),s.qZA(),s.TgZ(25,"div",5),s._uU(26),s.qZA(),s.TgZ(27,"div",4),s._uU(28),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(4),s.hij("Job : ",null==e.details?null:e.details.Job,""),s.xp6(2),s.hij("BL/Booking : ",null==e.details?null:e.details.BL_Booking,""),s.xp6(2),s.hij("Orgin : ",null==e.details?null:e.details.origin,""),s.xp6(2),s.hij("Destination : ",null==e.details?null:e.details.destination,""),s.xp6(2),s.hij("BOE : ",null==e.details?null:e.details.bill_of_entry,""),s.xp6(2),s.hij("Mark and Number : ",null==e.details?null:e.details.Mark_and_Number,""),s.xp6(2),s.hij("Commodity :",null==e.details?null:e.details.commodity,""),s.xp6(2),s.hij("CFS Slot : ",null==e.details?null:e.details.cfs_slot,""),s.xp6(2),s.AsE("Packages : ",null==e.details?null:e.details.packages,"/",null==e.details?null:e.details.pack_type,""),s.xp6(2),s.hij("Weight : ",null==e.details?null:e.details.weight,""),s.xp6(2),s.hij("Volume : ",null==e.details?null:e.details.volume,""),s.xp6(2),s.hij("Truck No : ",null==e.details?null:e.details.Truck_No,""),s.xp6(2),s.hij("Driver Name : ",null==e.details?null:e.details.Driver_Name,"")}}function k(e,t){if(1&e&&(s.TgZ(0,"div",6),s.TgZ(1,"div"),s.TgZ(2,"mat-card"),s.TgZ(3,"div",4),s._uU(4),s.qZA(),s.TgZ(5,"div",5),s._uU(6),s.qZA(),s.TgZ(7,"div",4),s._uU(8),s.qZA(),s.TgZ(9,"div",5),s._uU(10),s.qZA(),s.TgZ(11,"div",4),s._uU(12),s.qZA(),s.TgZ(13,"div",5),s._uU(14),s.qZA(),s.TgZ(15,"div",4),s._uU(16),s.qZA(),s.TgZ(17,"div",5),s._uU(18),s.qZA(),s.TgZ(19,"div",4),s._uU(20),s.qZA(),s.TgZ(21,"div",5),s._uU(22),s.qZA(),s.TgZ(23,"div",4),s._uU(24),s.qZA(),s.TgZ(25,"div",5),s._uU(26),s.qZA(),s.TgZ(27,"div",4),s._uU(28),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(4),s.hij("Job : ",null==e.details?null:e.details.Job,""),s.xp6(2),s.hij("BL/Booking : ",null==e.details?null:e.details.BL_Booking,""),s.xp6(2),s.hij("Orgin : ",null==e.details?null:e.details.origin,""),s.xp6(2),s.hij("Destination : ",null==e.details?null:e.details.destination,""),s.xp6(2),s.hij("BOE : ",null==e.details?null:e.details.bill_of_entry,""),s.xp6(2),s.hij("Mark and Number : ",null==e.details?null:e.details.Mark_and_Number,""),s.xp6(2),s.hij("Commodity :",null==e.details?null:e.details.commodity,""),s.xp6(2),s.hij("CFS Slot : ",null==e.details?null:e.details.cfs_slot,""),s.xp6(2),s.AsE("Packages : ",null==e.details?null:e.details.packages,"/",null==e.details?null:e.details.pack_type,""),s.xp6(2),s.hij("Weight : ",null==e.details?null:e.details.weight,""),s.xp6(2),s.hij("Volume : ",null==e.details?null:e.details.volume,""),s.xp6(2),s.hij("Truck No : ",null==e.details?null:e.details.Truck_No,""),s.xp6(2),s.hij("Driver Name : ",null==e.details?null:e.details.Driver_Name,"")}}let x=(()=>{class e{constructor(e){this.dialog=e}ngOnInit(){var e,t,i;this.details=this.bookingList.Delivery_BL[0],console.log(null===(e=this.bookingList)||void 0===e?void 0:e.Delivery_BL.length),0==(null===(i=null===(t=this.bookingList)||void 0===t?void 0:t.Delivery_BL)||void 0===i?void 0:i.length)&&(this.dialog.open(b,{height:"90px",width:"400px",data:"Delivery Empty! Click to close"}).disableClose=!0)}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.uw))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-list-delivery"]],inputs:{bookingList:"bookingList"},decls:3,vars:2,consts:[[1,"h-100","w-100","d-flex","flex-column","overflow-auto"],["class","flex-grow-1 overflow-auto d-none d-md-block",4,"ngIf"],["class","flex-grow-1 overflow-auto d-block d-md-none",4,"ngIf"],[1,"flex-grow-1","overflow-auto","d-none","d-md-block"],[1,"pb-2","color1","text-white","pl-2","pt-2"],[1,"pb-2","color","pl-2","pt-2"],[1,"flex-grow-1","overflow-auto","d-block","d-md-none"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.YNc(1,y,29,14,"div",1),s.YNc(2,k,29,14,"div",2),s.qZA()),2&e&&(s.xp6(1),s.Q6J("ngIf",!0),s.xp6(1),s.Q6J("ngIf",!0))},directives:[o.O5,_.a8],styles:[".color[_ngcontent-%COMP%]{background-color:#e7e8ea!important}.color1[_ngcontent-%COMP%]{background-color:#878a8f!important}"]}),e})(),w=(()=>{class e{constructor(e){this.deliveryCompleteMessage=e}ngOnInit(){console.log(this.deliveryCompleteMessage)}close(){window.location.reload()}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.WI))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-complete-status-popup"]],decls:14,vars:5,consts:[[1,"pb-2","color1","text-black","pl-2","pt-2"],[1,"pb-2","color","pl-2","pt-2"],[1,"text-danger","font-weight-bold","text-uppercase","ml-5","pl-1","mt-2"],[1,"d-flex","justify-content-center","mt-1"],["mat-raised-button","","mat-dialog-close","",1,"ml-3","mt-3",3,"click"]],template:function(e,t){1&e&&(s.TgZ(0,"div"),s.TgZ(1,"div",0),s._uU(2),s.qZA(),s.TgZ(3,"div",1),s._uU(4),s.qZA(),s.TgZ(5,"div",0),s._uU(6),s.qZA(),s.TgZ(7,"div",1),s._uU(8),s.qZA(),s.TgZ(9,"div",2),s._uU(10,"Delivery Completed Successfully! click to close"),s.qZA(),s.TgZ(11,"div",3),s.TgZ(12,"button",4),s.NdJ("click",function(){return t.close()}),s._uU(13,"Close"),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(2),s.hij("HBL : ",null==t.deliveryCompleteMessage||null==t.deliveryCompleteMessage.data||null==t.deliveryCompleteMessage.data.Delivery_BL?null:t.deliveryCompleteMessage.data.Delivery_BL.HBL,""),s.xp6(2),s.AsE("Delivered Packages : ",null==t.deliveryCompleteMessage||null==t.deliveryCompleteMessage.data||null==t.deliveryCompleteMessage.data.Delivery_BL?null:t.deliveryCompleteMessage.data.Delivery_BL.Delivered_Package_qty," ",null==t.deliveryCompleteMessage||null==t.deliveryCompleteMessage.data||null==t.deliveryCompleteMessage.data.Delivery_BL?null:t.deliveryCompleteMessage.data.Delivery_BL.Delivered_package,""),s.xp6(2),s.hij("Volume : ",null==t.deliveryCompleteMessage||null==t.deliveryCompleteMessage.data||null==t.deliveryCompleteMessage.data.Delivery_BL?null:t.deliveryCompleteMessage.data.Delivery_BL.Delivered_volume,""),s.xp6(2),s.hij("Weight : ",null==t.deliveryCompleteMessage||null==t.deliveryCompleteMessage.data||null==t.deliveryCompleteMessage.data.Delivery_BL?null:t.deliveryCompleteMessage.data.Delivery_BL.Delivered_weight,""))},directives:[v.lW,r.ZT],styles:[".color[_ngcontent-%COMP%]{background-color:#e7e8ea!important}.color1[_ngcontent-%COMP%]{background-color:#878a8f!important}"]}),e})();var T=i(9075),I=i(6458);function A(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",15),s.TgZ(1,"div",16),s.TgZ(2,"mat-icon",17),s._uU(3,"arrow_upward"),s.qZA(),s.qZA(),s.TgZ(4,"div",18),s.TgZ(5,"h1"),s._uU(6,"Upload Photos"),s.qZA(),s.qZA(),s.TgZ(7,"div",19),s.TgZ(8,"input",20,21),s.NdJ("change",function(){s.CHM(e);const t=s.MAs(9);return s.oxw().selectedPhoto(t)}),s.qZA(),s.qZA(),s.TgZ(10,"div",22),s.TgZ(11,"button",23),s.NdJ("click",function(){return s.CHM(e),s.MAs(9).click()}),s._uU(12,"Select Photo"),s.qZA(),s.TgZ(13,"button",24),s.NdJ("click",function(){s.CHM(e);const t=s.oxw(),i=s.MAs(7);return t.openCamera(i)}),s._uU(14,"Capture Photo"),s.qZA(),s.qZA(),s.qZA()}2&e&&(s.xp6(2),s.Q6J("inline",!0))}function C(e,t){if(1&e&&(s.TgZ(0,"div",25),s._UZ(1,"img",26),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.Q6J("src",e.selectedFileObjectUrl,s.LSH)}}const U=function(e,t){return{"d-none":e,"d-flex flex-grow-1 flex-column container overflow-auto":t}};let N=(()=>{class e{constructor(e,t,i){this.sanitizer=e,this.dialogRef=t,this._snackBar=i,this.isCameraPage=!1,this.isImageTaken=!1,this.isUploadClicked=!1}ngOnInit(){}save(){}selectedPhoto(e){this.selectedFileBlob=e.files[0];const t=URL.createObjectURL(e.files[0]);this.selectedFileObjectUrl=this.sanitizer.bypassSecurityTrustUrl(t)}uploadPhoto(){if(!this.isUploadClicked){this.isUploadClicked=!0;let e=new FileReader;e.readAsDataURL(this.selectedFileBlob),e.onloadend=()=>{}}}openCamera(e){this.isCameraPage=!0,navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1}).then(t=>{this.track=t.getTracks()[0],e.srcObject=t}).catch(function(e){console.error("Oops. Something is broken.",e)})}captureImage(e,t,i){e.width=t.videoWidth,e.height=t.videoHeight,e.getContext("2d").drawImage(t,0,0),i.src=e.toDataURL("image/webp"),this.selectedFileObjectUrl=e.toDataURL("image/webp"),e.toBlob(e=>this.selectedFileBlob=e),this.isImageTaken=!0,this.isCameraPage=!1}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(T.H7),s.Y36(r.so),s.Y36(I.ux))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-upload-photo-popup"]],decls:20,vars:10,consts:[[1,"d-flex","flex-column","overflow-auto","h-100"],[1,"cfs-title1"],[1,"flex-grow-1","d-flex","flex-column","container","overflow-auto"],["class","flex-grow-1 d-flex flex-column align-items-center justify-content-center",4,"ngIf"],[3,"ngClass"],["autoplay","","playsinline","",1,"showVideo","flex-grow-1","pb-3","overflow-auto",3,"hidden"],["cameraView",""],[1,"showVideo",3,"hidden"],["capturedPicture",""],["capturedImg",""],["mat-raised-button","","color","primary",1,"m-auto",3,"click"],["class","showImage p-3 flex-grow-1 overflow-auto m-auto",4,"ngIf"],[1,"d-flex","pb-1","pt-2"],["mat-raised-button","","mat-dialog-close","",1,"ml-auto"],["mat-raised-button","","color","primary",1,"ml-3",3,"disabled","click"],[1,"flex-grow-1","d-flex","flex-column","align-items-center","justify-content-center"],[1,"upload-icon-size","mb-3"],[3,"inline"],[1,""],[1,"d-none"],["type","file","id","myfile","name","myfile","accept","image/gif, image/jpeg",3,"change"],["selectFile",""],[1,"d-flex"],["mat-raised-button","","color","primary",1,"",3,"click"],["mat-raised-button","","color","primary",1,"ml-2",3,"click"],[1,"showImage","p-3","flex-grow-1","overflow-auto","m-auto"],[1,"w-100",3,"src"]],template:function(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",0),s.TgZ(1,"div",1),s._uU(2,"Capture Image"),s.qZA(),s.TgZ(3,"div",2),s.YNc(4,A,15,1,"div",3),s.TgZ(5,"div",4),s._UZ(6,"video",5,6),s._UZ(8,"canvas",7,8),s._UZ(10,"img",7,9),s.TgZ(12,"button",10),s.NdJ("click",function(){s.CHM(e);const i=s.MAs(9),o=s.MAs(7),l=s.MAs(11);return t.captureImage(i,o,l)}),s._uU(13,"Take Photo"),s.qZA(),s.qZA(),s.YNc(14,C,2,1,"div",11),s.TgZ(15,"div",12),s.TgZ(16,"button",13),s._uU(17," Close "),s.qZA(),s.TgZ(18,"button",14),s.NdJ("click",function(){return t.uploadPhoto()}),s._uU(19," Upload "),s.qZA(),s.qZA(),s.qZA(),s.qZA()}2&e&&(s.xp6(4),s.Q6J("ngIf",!t.selectedFileObjectUrl&&!t.isCameraPage),s.xp6(1),s.Q6J("ngClass",s.WLB(7,U,!t.isCameraPage,t.isCameraPage)),s.xp6(1),s.Q6J("hidden",t.isImageTaken),s.xp6(2),s.Q6J("hidden",!0),s.xp6(2),s.Q6J("hidden",!t.isImageTaken),s.xp6(4),s.Q6J("ngIf",t.selectedFileObjectUrl),s.xp6(4),s.Q6J("disabled",!t.selectedFileObjectUrl&&t.isUploadClicked))},directives:[o.O5,o.mk,v.lW,r.ZT,f.Hw],styles:[""]}),e})();var q=i(2873),L=i(7441),D=i(9047);function j(e,t){1&e&&s._UZ(0,"app-loader")}function J(e,t){if(1&e&&(s.TgZ(0,"mat-label"),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij(" ",e.details.pack_type," ")}}function M(e,t){1&e&&(s.TgZ(0,"mat-lable"),s._uU(1,"Type"),s.qZA())}function S(e,t){1&e&&(s.TgZ(0,"mat-hint",20),s._uU(1,"Max limit exceeded"),s.qZA())}function B(e,t){if(1&e&&(s.TgZ(0,"div",11),s.TgZ(1,"h4",21),s._uU(2),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(2),s.AsE("Total ",e.x," packages were added successfully, Remaining ",e.totalpackage-e.x,"")}}let O=(()=>{class e{constructor(e,t,i,o){this.dialog=e,this.data=t,this.cargoDeliveryService=i,this.DeliveryItemApiService=o,this.isLoading=!1,this.draft_no=null,this.bookingNo=null,this.x=0,this.cbm="",this.selectedContainer={segment_code:"05",container_number:"WHLU5580880"}}ngOnInit(){this.details=this.data.bookingList.Delivery_BL[0],console.log(this.details),this.totalpackage=this.details.packages,this.draft_no=this.data.draft_no,console.log(this.draft_no)}Resetquantity(){this.x=this.x+this.DeliveredPiece,console.log(this.x),this.DeliveredPiece=0}uploadPhoto(){this.dialog.open(N,{width:"80%",height:"90%",data:{}}).afterClosed().subscribe(e=>{})}save(){this.cargoDeliveryService.addDeliveryQty(this.details,this.DeliveredPiece,this.draft_no).subscribe(e=>{this.Resetquantity(),"Failure"==e.statusmessage&&(console.log("fail"),this.dialog.open(b,{height:"90px",width:"400px",data:"Failed! Please contact administrator"}))})}deliveryComplete(){this.dialog.closeAll(),this.cargoDeliveryService.DeliveryItemComplete(this.draft_no).subscribe(e=>{console.log(e),this.deliveryMessage=e,"Success"==e.statusmessage?this.dialog.open(w,{height:"300px",width:"500px",data:{data:this.deliveryMessage}}).disableClose=!0:(console.log("fail"),this.dialog.open(b,{height:"90px",width:"400px",data:"Failed! Please contact administrator"}))})}formatDate(e){return new Date(e).toLocaleTimeString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}calculateCBM(){}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.uw),s.Y36(r.WI),s.Y36(g),s.Y36(q.n))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-delivery-details-popup"]],decls:35,vars:11,consts:[[1,"d-flex"],[1,"d-flex","flex-column","w-100"],[4,"ngIf"],[1,"d-flex","flex-column","overflow-auto","h-150"],[1,"cfs-title1"],[1,"d-flex","flex-column","h-100"],[1,"d-flex","justify-content-between","w-100"],[1,"px-1","w-50"],["name","type",3,"ngModel","disabled","ngModelChange"],["matInput","","placeholder","Enter Delivery Qty","type","number","name","DeliveredPiece",3,"ngModel","ngModelChange","keyup"],["class","text-danger",4,"ngIf"],[1,"ml-1"],["class","ml-1",4,"ngIf"],[1,"d-flex","justify-content-between","mt-5","pt-4"],[1,"text-nowrap"],["mat-raised-button","","color","primary"],["mat-raised-button","","color","primary",1,"mr-3",3,"disabled","click"],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"d-flex","justify-content-center","mt-3","mb-1"],["mat-raised-button","",1,"ml-3"],[1,"text-danger"],["color","primary"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.YNc(2,j,1,0,"app-loader",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s._uU(5,"Delivery Item"),s.qZA(),s.TgZ(6,"div"),s.TgZ(7,"form",5),s.TgZ(8,"div",6),s.TgZ(9,"mat-form-field",7),s.YNc(10,J,2,1,"mat-label",2),s.YNc(11,M,2,0,"mat-lable",2),s.TgZ(12,"mat-select",8),s.NdJ("ngModelChange",function(e){return t.packageType=e}),s.qZA(),s.qZA(),s.TgZ(13,"mat-form-field",7),s.TgZ(14,"mat-label"),s._uU(15,"Delivered Qty"),s.qZA(),s.TgZ(16,"input",9),s.NdJ("ngModelChange",function(e){return t.DeliveredPiece=e})("keyup",function(){return t.calculateCBM()}),s.qZA(),s.YNc(17,S,2,0,"mat-hint",10),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(18,"div"),s.TgZ(19,"h4",11),s._uU(20),s.qZA(),s.qZA(),s.YNc(21,B,3,2,"div",12),s.TgZ(22,"div",13),s.TgZ(23,"div",14),s.TgZ(24,"button",15),s._uU(25,"Upload Photos "),s.qZA(),s.qZA(),s.TgZ(26,"div"),s.TgZ(27,"button",16),s.NdJ("click",function(){return t.deliveryComplete()}),s._uU(28," Complete "),s.qZA(),s.qZA(),s.TgZ(29,"div"),s.TgZ(30,"button",17),s.NdJ("click",function(){return t.save()}),s._uU(31," Save "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(32,"div",18),s.TgZ(33,"button",19),s._uU(34,"Close"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(2),s.Q6J("ngIf",t.isLoading),s.xp6(8),s.Q6J("ngIf",t.details.pack_type),s.xp6(1),s.Q6J("ngIf",!t.details.pack_type),s.xp6(1),s.Q6J("ngModel",t.packageType)("disabled",!0),s.xp6(4),s.Q6J("ngModel",t.DeliveredPiece),s.xp6(1),s.Q6J("ngIf",t.DeliveredPiece>t.totalpackage),s.xp6(3),s.hij("CFS Slot No: ",null==t.details?null:t.details.cfs_slot,""),s.xp6(1),s.Q6J("ngIf",0!=t.x),s.xp6(6),s.Q6J("disabled",t.DeliveredPiece>t.totalpackage-t.x||0==t.x),s.xp6(3),s.Q6J("disabled",t.DeliveredPiece>t.totalpackage-t.x||t.totalpackage==t.x||!(t.DeliveredPiece>0)))},directives:[o.O5,n._Y,n.JL,n.F,m.KE,L.gD,n.JJ,n.On,m.hX,h.Nt,n.wV,n.Fj,v.lW,D.R,m.bx],styles:[""]}),e})(),Q=(()=>{class e{constructor(e,t,i){this.dialog=e,this.DeliveryItemApiService=t,this.CargoDeliveryService=i,this.isUploadClicked=!1,this.isSuccess=!0,this.draft_no=null,this.bookingNo=null,this.isLoading=!1,this.dataSource=[],this.displayedColumns=["receivedPiece","damageNotes","actions"],this.buttonDisable=!0,this.selectedContainer={segment_code:"05",container_number:"WHLU5580880"},this.hblDetails={hblNumber:"220112000272",selectedContainer:{job_no:"22100302504"}},this.i="05",this.house_no="220112000272"}ngOnInit(){var e,t;this.details=null===(t=null===(e=this.bookingList)||void 0===e?void 0:e.Delivery_BL)||void 0===t?void 0:t[0],console.log("this.bookingList"),this.enableDeliverybutton(this.details)}enableDeliverybutton(e){0!=(null==e?void 0:e.packages)&&(this.buttonDisable=!1)}deliveryItem(){this.AddDeliveryItem(this.details)}loadData(){this.isLoading=!0,this.DeliveryItemApiService.getUnloadDetails(this.hblDetails,this.selectedContainer).subscribe(e=>{this.dataSource=e.items_list,this.isLoading=!1})}unloadItem(e){}DeleteItem(e,t,i,o){this.isLoading=!0,this.DeliveryItemApiService.deleteItem("16122","22100302504","05",o).subscribe(e=>{this.isLoading=!1,console.log(e,"delete api"),this.loadData()})}AddDeliveryItem(e){console.log(e),this.CargoDeliveryService.addDelivery(e).subscribe(e=>{console.log(e),this.draft_no=e.draft_cfs_no,""!=this.draft_no&&(this.dialog.open(O,{height:"auto",width:"auto",disableClose:!1,data:{bookingList:this.bookingList,draft_no:this.draft_no}}).disableClose=!0)})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.uw),s.Y36(q.n),s.Y36(g))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-delivery-details"]],inputs:{bookingList:"bookingList"},decls:4,vars:0,consts:[[1,"h-100","w-100","d-flex","flex-column","overflow-auto"],[1,"py-2","d-flex","align-items-center","justify-content-center","bg-white","border-top","flex-wrap"],["mat-raised-button","","color","primary",1,"mt-2","ml-3",3,"click"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"button",2),s.NdJ("click",function(){return t.deliveryItem()}),s._uU(3," Delivery Item "),s.qZA(),s.qZA(),s.qZA())},directives:[v.lW],styles:[""]}),e})();function P(e,t){if(1&e&&s._UZ(0,"app-list-delivery",24),2&e){const e=s.oxw();s.Q6J("bookingList",e.bookingList)}}function E(e,t){if(1&e&&s._UZ(0,"app-delivery-details",25),2&e){const e=s.oxw();s.Q6J("bookingList",e.bookingList)}}function Y(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"button",26),s.NdJ("click",function(){return s.CHM(e),s.oxw().searchBooking()}),s.TgZ(1,"mat-icon"),s._uU(2,"search"),s.qZA(),s._uU(3," Search \xa0\xa0"),s.qZA()}}function F(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"button",27),s.NdJ("click",function(){s.CHM(e);const t=s.oxw();return t.openBookingNumberScannerPopup(t.bookingSearchFC,"BookingNumber-mobile")}),s.TgZ(1,"mat-icon"),s._uU(2,"qr_code_scanner"),s.qZA(),s._uU(3," Scan \xa0\xa0"),s.qZA()}}function V(e,t){if(1&e&&s._UZ(0,"app-list-delivery",24),2&e){const e=s.oxw();s.Q6J("bookingList",e.bookingList)}}function R(e,t){if(1&e&&s._UZ(0,"app-delivery-details",28),2&e){const e=s.oxw();s.Q6J("bookingList",e.bookingList)}}const W=[{path:"",component:(()=>{class e{constructor(e,t){this.dialog=e,this.cargoDeliveryService=t,this.bookingSearchFC=new n.NI,this.isBookingSearch=!1,this.isBookingExpanded=!0,this.showMobileBookingSearch=!1,this.selectedBookingNumber=null,this.tabIndex=0,this.myControl=new n.NI,this.bookingNumber=[],this.isSearchLoading=!1,this.selectedValue=""}ngOnInit(){}bookingNumberSelected(e){this.selectedBookingNumber=e,this.tabIndex=1}openBookingNumberScannerPopup(e,t){const i=this.dialog.open(a.a,{height:"450px",width:"400px"});i.disableClose=!0,i.afterClosed().subscribe(t=>{e.setValue(t),window.navigator.vibrate&&(window.navigator.vibrate(100),setTimeout(()=>{window.navigator.vibrate(0)},500))}),"Booking-mobile"===t&&(this.showMobileBookingSearch=!0),"Booking-desktop"===t&&(this.isBookingSearch=!0)}clearSearch(){this.isBookingSearch=!this.isBookingSearch,this.bookingSearchFC.setValue(""),this.search="",this.bookingNumber=[]}getBookingListFun(e){}searchBooking(){this.bookingList=null,this.cargoDeliveryService.getCargoDeliveryList(this.search).subscribe(e=>{this.bookingList=e,console.log(e)})}allClosed(){this.bookingList=null,this.myControl.setValue("",{emitEvent:!1})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.uw),s.Y36(g))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-cargo-delivery"]],decls:39,vars:11,consts:[[1,"d-flex","flex-column","w-100","h-100"],[1,"d-none","d-md-flex","flex-grow-1","overflow-auto","h-100"],[1,"w-50","d-flex","overflow-auto","flex-column"],[1,"d-flex","py-2"],[1,"px-3","d-flex","py-2","align-items-center"],[1,"font-italic","pt-2","cfs-title1","text-danger","bold"],[1,"ml-auto"],[1,"flex-grow-1"],["type","text","aria-label","Number","matInput","","placeholder","HBL/Booking/Bill Of Entry",3,"ngModel","formControl","ngModelChange"],["searchInput",""],["mat-icon-button","",3,"click"],[3,"bookingList",4,"ngIf"],[3,"vertical"],[1,"d-flex","overflow-auto","w-50","flex-column"],["class","flex-grow-1 overflow-auto",3,"bookingList",4,"ngIf"],[1,"d-flex","flex-column","d-md-none","h-100","w-100","overflow-auto"],[1,"bg-white","border-top","p-2","d-flex"],[1,"flex-grow-1","pr-2"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","primary","class","ml-2",3,"click",4,"ngIf"],[1,"d-flex","flex-column","flex-grow-1","overflow-auto"],[1,"flex-grow-1","overflow-auto"],[1,""],["class","flex-grow-1",3,"bookingList",4,"ngIf"],[3,"bookingList"],[1,"flex-grow-1","overflow-auto",3,"bookingList"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","primary",1,"ml-2",3,"click"],[1,"flex-grow-1",3,"bookingList"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s._UZ(1,"app-header"),s.TgZ(2,"div",1),s.TgZ(3,"div",2),s.TgZ(4,"div",3),s.TgZ(5,"div",4),s.TgZ(6,"div",5),s._uU(7,"Cargo Delivery"),s.qZA(),s.qZA(),s.TgZ(8,"div",6),s.TgZ(9,"mat-form-field",7),s.TgZ(10,"mat-label"),s._uU(11,"Search"),s.qZA(),s.TgZ(12,"input",8,9),s.NdJ("ngModelChange",function(e){return t.search=e}),s.qZA(),s.qZA(),s.TgZ(14,"button",10),s.NdJ("click",function(){return t.searchBooking()}),s.TgZ(15,"mat-icon"),s._uU(16,"search"),s.qZA(),s.qZA(),s.TgZ(17,"button",10),s.NdJ("click",function(){return t.openBookingNumberScannerPopup(t.bookingSearchFC,"BookingNumber-desktop")}),s.TgZ(18,"mat-icon"),s._uU(19,"qr_code_scanner"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.YNc(20,P,1,1,"app-list-delivery",11),s.qZA(),s._UZ(21,"mat-divider",12),s.TgZ(22,"div",13),s.YNc(23,E,1,1,"app-delivery-details",14),s.qZA(),s.qZA(),s.TgZ(24,"div",15),s.TgZ(25,"div",16),s.TgZ(26,"div",6),s.TgZ(27,"mat-form-field",17),s.TgZ(28,"mat-label"),s._uU(29,"Search"),s.qZA(),s.TgZ(30,"input",8,9),s.NdJ("ngModelChange",function(e){return t.search=e}),s.qZA(),s.qZA(),s.YNc(32,Y,4,0,"button",18),s.YNc(33,F,4,0,"button",19),s.qZA(),s.qZA(),s.TgZ(34,"div",20),s.TgZ(35,"div",21),s.YNc(36,V,1,1,"app-list-delivery",11),s.qZA(),s.TgZ(37,"div",22),s.YNc(38,R,1,1,"app-delivery-details",23),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(12),s.Q6J("ngModel",t.search)("formControl",t.myControl),s.xp6(8),s.Q6J("ngIf",t.bookingList),s.xp6(1),s.Q6J("vertical",!0),s.xp6(2),s.Q6J("ngIf",t.bookingList),s.xp6(7),s.Q6J("ngModel",t.search)("formControl",t.myControl),s.xp6(2),s.Q6J("ngIf",!t.showMobileBookingSearch),s.xp6(1),s.Q6J("ngIf",!t.showMobileBookingSearch),s.xp6(3),s.Q6J("ngIf",t.bookingList),s.xp6(2),s.Q6J("ngIf",t.bookingList))},directives:[p.G,m.KE,m.hX,h.Nt,n.Fj,n.JJ,n.oH,v.lW,f.Hw,o.O5,Z.d,x,Q],styles:[""]}),e})()}];let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[l.Bz.forChild(W)],l.Bz]}),e})();var $=i(4885),H=(i(9238),i(9490),i(521),i(2458)),X=(i(5319),i(9765),i(1439),i(6682),i(5917),i(2759),i(625)),G=i(9243);i(6461),i(7636),i(5257),i(3190),i(5435),i(8307),i(1289),i(946);const K={provide:new s.OlP("mat-autocomplete-scroll-strategy"),deps:[X.aV],useFactory:function(e){return()=>e.scrollStrategies.reposition()}};let ee=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[K],imports:[[X.U8,H.Ng,H.BQ,o.ez],G.ZD,H.Ng,H.BQ]}),e})();var te=i(5939),ie=i(2613),oe=i(171),le=i(2178),ne=i(2789),ae=i(4466);let se=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.ez,z,ae.m,Z.t,f.Ps,m.lN,_.QW,ne.p0,le.Cv,r.Is,oe.To,v.ot,L.LD,n.UX,n.u5,ie.Fk,h.c,I.ZX,te.Nh,ee,$.Cq]]}),e})()}}]);