(self.webpackChunkcfs=self.webpackChunkcfs||[]).push([[366],{366:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CargoDeliveryModule:()=>ue});var o=i(8583),n=i(4655),a=i(3679),l=i(5203),r=i(7716),s=i(1095),c=i(2238);let d=(()=>{class e{constructor(){}ngOnInit(){}ok(){window.location.reload()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-delivery-fail-status"]],decls:3,vars:0,consts:[[1,"d-flex","pb-1"],["mat-raised-button","","mat-dialog-close","",1,"ml-auto",3,"click"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"button",1),r.NdJ("click",function(){return t.ok()}),r._uU(2,"Ok"),r.qZA(),r.qZA())},directives:[s.lW,c.ZT],styles:[""]}),e})();var g=i(1841),u=i(8002),p=i(2340);let m=(()=>{class e{constructor(e){this.http=e}packType(){const e={headers:new g.WM({"Content-Type":"application/x-www-form-urlencoded"})},t=new URLSearchParams;let i=window.localStorage.getItem("Token");return this.http.post(`${p.N.apiUrl}/getpack_list?user_token=${i}&username=&saas_id=LIVEFSL&search_key=`,t.toString(),e).pipe((0,u.U)(e=>{try{return e}catch(t){return e}}))}getCargoDeliveryList(e){let t=e;const i={headers:new g.WM({"Content-Type":"application/x-www-form-urlencoded"})},o=new URLSearchParams;let n=window.localStorage.getItem("Token");return this.http.post(`${p.N.apiUrl}/getcargo_delivery_list?user_token=${n}&username=&saas_id=LIVEFSL&search_key=${t}`,o.toString(),i).pipe((0,u.U)(e=>{try{return e}catch(t){return e}}))}getDeliveryItem(e){let t=e;const i={headers:new g.WM({"Content-Type":"application/x-www-form-urlencoded"})},o=new URLSearchParams;return this.http.post(`${p.N.apiUrl}/save_cargo_header?user_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkNGU1RBQjEiLCJuYmYiOjE2NzMzNTMxNTcsImV4cCI6MTcwNDg4OTE1NywiaWF0IjoxNjczMzUzMTU3fQ.AJ5SuHBJHTRTVefhab5u6RDVzkIb26N_hbTNbTTcZp4&segment_code=&saas_id=LIVEFSL&booking_no=${t}&draft_cfs_no=&item_desc=TEST&pack_code=BAG&customer_code=C904086&customer_name=BOSCO&driver_name=1&truck_no=1&received_qty=&volume=&weight=&cfs_note=1&marks_no=1&supplier_code=C0058059&supplier_name=RAJEN%20ODEDRA&supplier_ref=&receive_delivery=DELIVERY`,o.toString(),i).pipe((0,u.U)(e=>{try{return e}catch(t){return e}}))}SaveDeliveryItem(e,t,i){let o=t,n=i,a=e;const l={headers:new g.WM({"Content-Type":"application/x-www-form-urlencoded"})},r=new URLSearchParams;return this.http.post(`${p.N.apiUrl}/save_cargo_detail?user_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkNGU1RBQjEiLCJuYmYiOjE2NzMzNTMxNTcsImV4cCI6MTcwNDg4OTE1NywiaWF0IjoxNjczMzUzMTU3fQ.AJ5SuHBJHTRTVefhab5u6RDVzkIb26N_hbTNbTTcZp4&subjob_uid=&saas_id=LIVEFSL&booking_no=${a}&draft_cfs_no=${o}&height=1&breadth=1&length=1&received_qty=${n}&volume=0.000&weight=1& receive_delivery=DELIVERY`,r.toString(),l).pipe((0,u.U)(e=>{try{return e}catch(t){return e}}))}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(g.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=i(9470),f=i(8295),Z=i(9983),v=i(6627),b=i(1769),x=i(9075),k=i(6458);function _(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"div",15),r.TgZ(1,"div",16),r.TgZ(2,"mat-icon",17),r._uU(3,"arrow_upward"),r.qZA(),r.qZA(),r.TgZ(4,"div",18),r.TgZ(5,"h1"),r._uU(6,"Upload Photos"),r.qZA(),r.qZA(),r.TgZ(7,"div",19),r.TgZ(8,"input",20,21),r.NdJ("change",function(){r.CHM(e);const t=r.MAs(9);return r.oxw().selectedPhoto(t)}),r.qZA(),r.qZA(),r.TgZ(10,"div",22),r.TgZ(11,"button",23),r.NdJ("click",function(){return r.CHM(e),r.MAs(9).click()}),r._uU(12,"Select Photo"),r.qZA(),r.TgZ(13,"button",24),r.NdJ("click",function(){r.CHM(e);const t=r.oxw(),i=r.MAs(7);return t.openCamera(i)}),r._uU(14,"Capture Photo"),r.qZA(),r.qZA(),r.qZA()}2&e&&(r.xp6(2),r.Q6J("inline",!0))}function w(e,t){if(1&e&&(r.TgZ(0,"div",25),r._UZ(1,"img",26),r.qZA()),2&e){const e=r.oxw();r.xp6(1),r.Q6J("src",e.selectedFileObjectUrl,r.LSH)}}const T=function(e,t){return{"d-none":e,"d-flex flex-grow-1 flex-column container overflow-auto":t}};let y=(()=>{class e{constructor(e,t,i){this.sanitizer=e,this.dialogRef=t,this._snackBar=i,this.isCameraPage=!1,this.isImageTaken=!1,this.isUploadClicked=!1}ngOnInit(){}save(){}selectedPhoto(e){this.selectedFileBlob=e.files[0];const t=URL.createObjectURL(e.files[0]);this.selectedFileObjectUrl=this.sanitizer.bypassSecurityTrustUrl(t)}uploadPhoto(){if(!this.isUploadClicked){this.isUploadClicked=!0;let e=new FileReader;e.readAsDataURL(this.selectedFileBlob),e.onloadend=()=>{}}}openCamera(e){this.isCameraPage=!0,navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1}).then(t=>{this.track=t.getTracks()[0],e.srcObject=t}).catch(function(e){console.error("Oops. Something is broken.",e)})}captureImage(e,t,i){e.width=t.videoWidth,e.height=t.videoHeight,e.getContext("2d").drawImage(t,0,0),i.src=e.toDataURL("image/webp"),this.selectedFileObjectUrl=e.toDataURL("image/webp"),e.toBlob(e=>this.selectedFileBlob=e),this.isImageTaken=!0,this.isCameraPage=!1}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(x.H7),r.Y36(c.so),r.Y36(k.ux))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-upload-photo-popup"]],decls:20,vars:10,consts:[[1,"d-flex","flex-column","overflow-auto","h-100"],[1,"cfs-title1"],[1,"flex-grow-1","d-flex","flex-column","container","overflow-auto"],["class","flex-grow-1 d-flex flex-column align-items-center justify-content-center",4,"ngIf"],[3,"ngClass"],["autoplay","","playsinline","",1,"showVideo","flex-grow-1","pb-3","overflow-auto",3,"hidden"],["cameraView",""],[1,"showVideo",3,"hidden"],["capturedPicture",""],["capturedImg",""],["mat-raised-button","","color","primary",1,"m-auto",3,"click"],["class","showImage p-3 flex-grow-1 overflow-auto m-auto",4,"ngIf"],[1,"d-flex","pb-1","pt-2"],["mat-raised-button","","mat-dialog-close","",1,"ml-auto"],["mat-raised-button","","color","primary",1,"ml-3",3,"disabled","click"],[1,"flex-grow-1","d-flex","flex-column","align-items-center","justify-content-center"],[1,"upload-icon-size","mb-3"],[3,"inline"],[1,""],[1,"d-none"],["type","file","id","myfile","name","myfile","accept","image/gif, image/jpeg",3,"change"],["selectFile",""],[1,"d-flex"],["mat-raised-button","","color","primary",1,"",3,"click"],["mat-raised-button","","color","primary",1,"ml-2",3,"click"],[1,"showImage","p-3","flex-grow-1","overflow-auto","m-auto"],[1,"w-100",3,"src"]],template:function(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"div",0),r.TgZ(1,"div",1),r._uU(2,"Capture Image"),r.qZA(),r.TgZ(3,"div",2),r.YNc(4,_,15,1,"div",3),r.TgZ(5,"div",4),r._UZ(6,"video",5,6),r._UZ(8,"canvas",7,8),r._UZ(10,"img",7,9),r.TgZ(12,"button",10),r.NdJ("click",function(){r.CHM(e);const i=r.MAs(9),o=r.MAs(7),n=r.MAs(11);return t.captureImage(i,o,n)}),r._uU(13,"Take Photo"),r.qZA(),r.qZA(),r.YNc(14,w,2,1,"div",11),r.TgZ(15,"div",12),r.TgZ(16,"button",13),r._uU(17," Close "),r.qZA(),r.TgZ(18,"button",14),r.NdJ("click",function(){return t.uploadPhoto()}),r._uU(19," Upload "),r.qZA(),r.qZA(),r.qZA(),r.qZA()}2&e&&(r.xp6(4),r.Q6J("ngIf",!t.selectedFileObjectUrl&&!t.isCameraPage),r.xp6(1),r.Q6J("ngClass",r.WLB(7,T,!t.isCameraPage,t.isCameraPage)),r.xp6(1),r.Q6J("hidden",t.isImageTaken),r.xp6(2),r.Q6J("hidden",!0),r.xp6(2),r.Q6J("hidden",!t.isImageTaken),r.xp6(4),r.Q6J("ngIf",t.selectedFileObjectUrl),r.xp6(4),r.Q6J("disabled",!t.selectedFileObjectUrl&&t.isUploadClicked))},directives:[o.O5,o.mk,s.lW,c.ZT,v.Hw],styles:[""]}),e})();var A=i(2873),q=i(7441),U=i(9047);function C(e,t){1&e&&r._UZ(0,"app-loader")}function I(e,t){if(1&e&&(r.TgZ(0,"mat-label"),r._uU(1),r.qZA()),2&e){const e=r.oxw();r.xp6(1),r.hij(" ",e.details.pack_type," ")}}function N(e,t){1&e&&(r.TgZ(0,"mat-lable"),r._uU(1,"Type"),r.qZA())}function D(e,t){if(1&e&&(r.TgZ(0,"div",19),r.TgZ(1,"h4"),r._uU(2),r.qZA(),r.qZA()),2&e){const e=r.oxw();r.xp6(2),r.hij("Load Quantity - ",e.x,"")}}let L=(()=>{class e{constructor(e,t,i,o){this.dialog=e,this.data=t,this.cargoDeliveryService=i,this.DeliveryItemApiService=o,this.isLoading=!1,this.DeliveredPiece="",this.draft_no=null,this.bookingNo=null,this.x=0,this.cbm="",this.selectedContainer={segment_code:"05",container_number:"WHLU5580880"}}ngOnInit(){this.details=this.data.bookingList.Delivery_BL[0],this.bookingNo=this.data.bookingList.Delivery_BL[0].BL_Booking,this.draft_no=this.data.draft_no,console.log(this.bookingNo),this.cargoDeliveryService.packType().subscribe(e=>{this.types=e.pack_master.map(e=>({value:e.port_code,viewValue:e.port_name}))})}quantity(){this.x=this.DeliveredPiece,console.log(this.x),this.DeliveredPiece=""}uploadPhoto(){this.dialog.open(y,{width:"80%",height:"90%",data:{}}).afterClosed().subscribe(e=>{})}save(){this.quantity(),this.cargoDeliveryService.SaveDeliveryItem(this.bookingNo,this.draft_no,this.x).subscribe(e=>{console.log(e)}),this.DeliveredPiece&&this.formatDate((new Date).getTime())}formatDate(e){return new Date(e).toLocaleTimeString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}calculateCBM(){}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.uw),r.Y36(c.WI),r.Y36(m),r.Y36(A.n))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-delivery-details-popup"]],decls:29,vars:8,consts:[[1,"d-flex"],[1,"d-flex","flex-column","w-100"],[4,"ngIf"],[1,"d-flex","flex-column","overflow-auto","h-150"],[1,"cfs-title1"],[1,"flex-grow-1","container","overflow-auto","h-150"],[1,"col-12","d-flex","flex-column","h-100"],[1,"d-flex","justify-content-between","w-100"],[1,"px-1","w-50"],["name","type",3,"ngModel","disabled","ngModelChange"],["matInput","","placeholder","Enter Delivery Qty","type","number","name","DeliveredPiece",3,"ngModel","ngModelChange","keyup"],["class","ml-4","color","primary",4,"ngIf"],[1,"d-flex","align-items-end","h-150","mt-4","pt-2"],[1,"d-flex","pb-1","pt-2","mt-5","pt-5"],["mat-raised-button","","color","primary",1,"ml-4",3,"click"],["mat-raised-button","","color","primary",1,"ml-5"],["mat-raised-button","","color","primary",1,"ml-5",3,"disabled","click"],[1,"d-flex","justify-content-center","mt-1"],["mat-raised-button","","mat-dialog-close","",1,"ml-3"],["color","primary",1,"ml-4"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.YNc(2,C,1,0,"app-loader",2),r.TgZ(3,"div",3),r.TgZ(4,"div",4),r._uU(5,"Delivery Item"),r.qZA(),r.TgZ(6,"div",5),r.TgZ(7,"form",6),r.TgZ(8,"div",7),r.TgZ(9,"mat-form-field",8),r.YNc(10,I,2,1,"mat-label",2),r.YNc(11,N,2,0,"mat-lable",2),r.TgZ(12,"mat-select",9),r.NdJ("ngModelChange",function(e){return t.packageType=e}),r.qZA(),r.qZA(),r.TgZ(13,"mat-form-field",8),r.TgZ(14,"mat-label"),r._uU(15,"Delivered Qty"),r.qZA(),r.TgZ(16,"input",10),r.NdJ("ngModelChange",function(e){return t.DeliveredPiece=e})("keyup",function(){return t.calculateCBM()}),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.YNc(17,D,3,1,"div",11),r.TgZ(18,"div",12),r.TgZ(19,"div",13),r.TgZ(20,"button",14),r.NdJ("click",function(){return t.uploadPhoto()}),r._uU(21," Upload Photos "),r.qZA(),r.TgZ(22,"button",15),r._uU(23,"Complete"),r.qZA(),r.TgZ(24,"button",16),r.NdJ("click",function(){return t.save()}),r._uU(25,"Save"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(26,"div",17),r.TgZ(27,"button",18),r._uU(28,"Close"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(2),r.Q6J("ngIf",t.isLoading),r.xp6(8),r.Q6J("ngIf",t.details.pack_type),r.xp6(1),r.Q6J("ngIf",!t.details.pack_type),r.xp6(1),r.Q6J("ngModel",t.packageType)("disabled",!0),r.xp6(4),r.Q6J("ngModel",t.DeliveredPiece),r.xp6(1),r.Q6J("ngIf",0!=t.x),r.xp6(7),r.Q6J("disabled",!t.DeliveredPiece))},directives:[o.O5,a._Y,a.JL,a.F,f.KE,q.gD,a.JJ,a.On,f.hX,Z.Nt,a.wV,a.Fj,s.lW,c.ZT,U.R],styles:[""]}),e})();var J=i(2789),S=i(2178);function B(e,t){1&e&&(r.TgZ(0,"div",14),r._UZ(1,"mat-progress-bar",15),r.qZA())}function j(e,t){1&e&&(r.TgZ(0,"th",16),r._uU(1,"Delivered Qty"),r.qZA())}function M(e,t){if(1&e&&(r.TgZ(0,"td",17),r._uU(1),r.qZA()),2&e){const e=t.$implicit;r.xp6(1),r.Oqu(e.rcvd_qty)}}function Q(e,t){1&e&&(r.TgZ(0,"th",16),r._uU(1,"Condition"),r.qZA())}function P(e,t){if(1&e&&(r.TgZ(0,"td",18),r._uU(1),r.qZA()),2&e){const e=t.$implicit;r.xp6(1),r.Oqu(e.good_damage)}}function O(e,t){1&e&&(r.TgZ(0,"th",19),r._uU(1,"Action"),r.qZA())}function Y(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"td",18),r.TgZ(1,"div",20),r.TgZ(2,"button",21),r.NdJ("click",function(){const t=r.CHM(e),i=t.$implicit,o=t.index,n=r.oxw();return n.DeleteItem(i,n.dataSource,o,n.house_no)}),r.TgZ(3,"mat-icon"),r._uU(4,"delete"),r.qZA(),r.qZA(),r.qZA(),r.qZA()}}function F(e,t){1&e&&r._UZ(0,"tr",22)}function E(e,t){1&e&&r._UZ(0,"tr",23)}let R=(()=>{class e{constructor(e,t,i){this.dialog=e,this.DeliveryItemApiService=t,this.CargoDeliveryService=i,this.isUploadClicked=!1,this.isSuccess=!0,this.draft_no=null,this.bookingNo=null,this.isLoading=!1,this.dataSource=[],this.displayedColumns=["receivedPiece","damageNotes","actions"],this.selectedContainer={segment_code:"05",container_number:"WHLU5580880"},this.hblDetails={hblNumber:"220112000272",selectedContainer:{job_no:"22100302504"}},this.i="05",this.house_no="220112000272"}ngOnInit(){this.details=this.bookingList}deliveryItem(){if(this.loadData(),this.AddDeliveryItem(),!this.isUploadClicked){this.isUploadClicked=!0;const e=this.dialog.open(L,{height:"400px",width:"500px",data:{bookingList:this.bookingList,draft_no:this.draft_no,bookingNo:this.bookingNo}});e.disableClose=!0,e.afterClosed().subscribe(e=>{e&&this.loadData()}),this.isUploadClicked=!1}}loadData(){this.isLoading=!0,this.DeliveryItemApiService.getUnloadDetails(this.hblDetails,this.selectedContainer).subscribe(e=>{this.dataSource=e.items_list,this.isLoading=!1})}unloadItem(e){}DeleteItem(e,t,i,o){this.isLoading=!0,this.DeliveryItemApiService.deleteItem("16122","22100302504","05",o).subscribe(e=>{this.isLoading=!1,console.log(e,"delete api"),this.loadData()})}AddDeliveryItem(){this.CargoDeliveryService.getDeliveryItem(this.bookingList.Delivery_BL[0].BL_Booking).subscribe(e=>{this.draft_no=e.draft_cfs_no})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.uw),r.Y36(A.n),r.Y36(m))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-delivery-details"]],inputs:{bookingList:"bookingList"},decls:17,vars:5,consts:[[1,"h-100","w-100","d-flex","flex-column","overflow-auto"],[1,"py-2","d-flex","align-items-center","justify-content-center","bg-white","border-top","flex-wrap"],["mat-raised-button","","color","primary",1,"mt-2","ml-3",3,"disabled","click"],["class","flex-grow-1 d-flex align-items-center justify-content-center ",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","w-100","list-container",3,"dataSource"],["matColumnDef","receivedPiece"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","px-2",4,"matCellDef"],["matColumnDef","damageNotes"],["mat-cell","",4,"matCellDef"],["matColumnDef","actions"],["mat-header-cell","","class","text-right",4,"matHeaderCellDef"],["mat-header-row","","class","sticky-top",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"flex-grow-1","d-flex","align-items-center","justify-content-center"],["mode","indeterminate",1,"mx-4"],["mat-header-cell",""],["mat-cell","",1,"px-2"],["mat-cell",""],["mat-header-cell","",1,"text-right"],[1,"d-flex","justify-content-end"],["mat-icon-button","","color","primary",3,"click"],["mat-header-row","",1,"sticky-top"],["mat-row",""]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"button",2),r.NdJ("click",function(){return t.deliveryItem()}),r._uU(3," Delivery Item "),r.qZA(),r.qZA(),r.YNc(4,B,2,0,"div",3),r.TgZ(5,"table",4),r.ynx(6,5),r.YNc(7,j,2,0,"th",6),r.YNc(8,M,2,1,"td",7),r.BQk(),r.ynx(9,8),r.YNc(10,Q,2,0,"th",6),r.YNc(11,P,2,1,"td",9),r.BQk(),r.ynx(12,10),r.YNc(13,O,2,0,"th",11),r.YNc(14,Y,5,0,"td",9),r.BQk(),r.YNc(15,F,1,0,"tr",12),r.YNc(16,E,1,0,"tr",13),r.qZA(),r.qZA()),2&e&&(r.xp6(2),r.Q6J("disabled","SUCCESS"!=(null==t.bookingList||null==t.bookingList.Delivery_BL[0]?null:t.bookingList.Delivery_BL[0].status)),r.xp6(2),r.Q6J("ngIf",t.isLoading),r.xp6(1),r.Q6J("dataSource",t.dataSource),r.xp6(10),r.Q6J("matHeaderRowDef",t.displayedColumns),r.xp6(1),r.Q6J("matRowDefColumns",t.displayedColumns))},directives:[s.lW,o.O5,J.BZ,J.w1,J.fO,J.Dz,J.as,J.nj,S.pW,J.ge,J.ev,v.Hw,J.XQ,J.Gk],styles:[""]}),e})();var V=i(5939),H=i(3738);function z(e,t){if(1&e&&(r.TgZ(0,"div",3),r.TgZ(1,"div"),r.TgZ(2,"mat-card"),r.TgZ(3,"div",4),r._uU(4),r.qZA(),r.TgZ(5,"div",5),r._uU(6),r.qZA(),r.TgZ(7,"div",4),r._uU(8),r.qZA(),r.TgZ(9,"div",5),r._uU(10),r.qZA(),r.TgZ(11,"div",4),r._uU(12),r.qZA(),r.TgZ(13,"div",5),r._uU(14),r.qZA(),r.TgZ(15,"div",4),r._uU(16),r.qZA(),r.TgZ(17,"div",5),r._uU(18),r.qZA(),r.TgZ(19,"div",4),r._uU(20),r.qZA(),r.TgZ(21,"div",5),r._uU(22),r.qZA(),r.TgZ(23,"div",4),r._uU(24),r.qZA(),r.TgZ(25,"div",5),r._uU(26),r.qZA(),r.TgZ(27,"div",4),r._uU(28),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e){const e=r.oxw();r.xp6(4),r.hij("Job : ",e.details.Job,""),r.xp6(2),r.hij("BL/Booking : ",e.details.BL_Booking,""),r.xp6(2),r.hij("Orgin : ",e.details.origin,""),r.xp6(2),r.hij("Destination : ",e.details.destination,""),r.xp6(2),r.hij("BOE : ",e.details.bill_of_entry,""),r.xp6(2),r.hij("Mark and Number : ",e.details.Mark_and_Number,""),r.xp6(2),r.hij("Commodity :",e.details.commodity,""),r.xp6(2),r.hij("CFS Slot : ",e.details.cfs_slot,""),r.xp6(2),r.AsE("Packages : ",e.details.packages,"/",e.details.pack_type,""),r.xp6(2),r.hij("Weight : ",e.details.weight,""),r.xp6(2),r.hij("Volume : ",e.details.volume,""),r.xp6(2),r.hij("Truck No : ",e.details.Truck_No,""),r.xp6(2),r.hij("Driver Name : ",e.details.Driver_Name,"")}}function W(e,t){if(1&e&&(r.TgZ(0,"div",6),r.TgZ(1,"div"),r.TgZ(2,"mat-card"),r.TgZ(3,"div",4),r._uU(4),r.qZA(),r.TgZ(5,"div",5),r._uU(6),r.qZA(),r.TgZ(7,"div",4),r._uU(8),r.qZA(),r.TgZ(9,"div",5),r._uU(10),r.qZA(),r.TgZ(11,"div",4),r._uU(12),r.qZA(),r.TgZ(13,"div",5),r._uU(14),r.qZA(),r.TgZ(15,"div",4),r._uU(16),r.qZA(),r.TgZ(17,"div",5),r._uU(18),r.qZA(),r.TgZ(19,"div",4),r._uU(20),r.qZA(),r.TgZ(21,"div",5),r._uU(22),r.qZA(),r.TgZ(23,"div",4),r._uU(24),r.qZA(),r.TgZ(25,"div",5),r._uU(26),r.qZA(),r.TgZ(27,"div",4),r._uU(28),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e){const e=r.oxw();r.xp6(4),r.hij("Job : ",e.details.Job,""),r.xp6(2),r.hij("BL/Booking : ",e.details.BL_Booking,""),r.xp6(2),r.hij("Orgin : ",e.details.origin,""),r.xp6(2),r.hij("Destination : ",e.details.destination,""),r.xp6(2),r.hij("BOE : ",e.details.bill_of_entry,""),r.xp6(2),r.hij("Mark and Number : ",e.details.Mark_and_Number,""),r.xp6(2),r.hij("Commodity :",e.details.commodity,""),r.xp6(2),r.hij("CFS Slot : ",e.details.cfs_slot,""),r.xp6(2),r.AsE("Packages : ",e.details.packages,"/",e.details.pack_type,""),r.xp6(2),r.hij("Weight : ",e.details.weight,""),r.xp6(2),r.hij("Volume : ",e.details.volume,""),r.xp6(2),r.hij("Truck No : ",e.details.Truck_No,""),r.xp6(2),r.hij("Driver Name : ",e.details.Driver_Name,"")}}let X=(()=>{class e{constructor(){}ngOnInit(){this.details=this.bookingList.Delivery_BL[0]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-list-delivery"]],inputs:{bookingList:"bookingList"},decls:3,vars:2,consts:[[1,"h-100","w-100","d-flex","flex-column","overflow-auto"],["class","flex-grow-1 overflow-auto d-none d-md-block",4,"ngIf"],["class","flex-grow-1 overflow-auto d-block d-md-none",4,"ngIf"],[1,"flex-grow-1","overflow-auto","d-none","d-md-block"],[1,"pb-2","color1","text-white","pl-2","pt-2"],[1,"pb-2","color","pl-2","pt-2"],[1,"flex-grow-1","overflow-auto","d-block","d-md-none"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.YNc(1,z,29,14,"div",1),r.YNc(2,W,29,14,"div",2),r.qZA()),2&e&&(r.xp6(1),r.Q6J("ngIf",!0),r.xp6(1),r.Q6J("ngIf",!0))},directives:[o.O5,H.a8],styles:[".color[_ngcontent-%COMP%]{background-color:#e7e8ea!important}.color1[_ngcontent-%COMP%]{background-color:#878a8f!important}"]}),e})();function $(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"app-list-delivery",27),r.NdJ("selectedRow",function(t){return r.CHM(e),r.oxw().bookingNumberSelected(t)}),r.qZA()}if(2&e){const e=r.oxw();r.Q6J("bookingList",e.bookingList)}}function G(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"button",28),r.NdJ("click",function(){return r.CHM(e),r.oxw().searchBooking()}),r.TgZ(1,"mat-icon"),r._uU(2,"search"),r.qZA(),r._uU(3," Search \xa0\xa0"),r.qZA()}}function K(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"button",29),r.NdJ("click",function(){r.CHM(e);const t=r.oxw();return t.openBookingNumberScannerPopup(t.bookingSearchFC,"BookingNumber-mobile")}),r.TgZ(1,"mat-icon"),r._uU(2,"qr_code_scanner"),r.qZA(),r._uU(3," Scan \xa0\xa0"),r.qZA()}}function ee(e,t){if(1&e&&r._UZ(0,"app-list-delivery",30),2&e){const e=r.oxw();r.Q6J("bookingList",e.bookingList)}}const te=[{path:"",component:(()=>{class e{constructor(e,t){this.dialog=e,this.cargoDeliveryService=t,this.bookingSearchFC=new a.NI,this.isBookingSearch=!1,this.isBookingExpanded=!0,this.showMobileBookingSearch=!1,this.selectedBookingNumber=null,this.tabIndex=0,this.myControl=new a.NI,this.bookingNumber=[],this.isSearchLoading=!1,this.selectedValue=""}ngOnInit(){}bookingNumberSelected(e){this.selectedBookingNumber=e,this.tabIndex=1}openBookingNumberScannerPopup(e,t){const i=this.dialog.open(l.a,{height:"450px",width:"400px"});i.disableClose=!0,i.afterClosed().subscribe(t=>{e.setValue(t),window.navigator.vibrate&&(window.navigator.vibrate(100),setTimeout(()=>{window.navigator.vibrate(0)},500))}),"Booking-mobile"===t&&(this.showMobileBookingSearch=!0),"Booking-desktop"===t&&(this.isBookingSearch=!0)}clearSearch(){this.isBookingSearch=!this.isBookingSearch,this.bookingSearchFC.setValue(""),this.search="",this.bookingNumber=[]}getBookingListFun(e){}searchBooking(){this.cargoDeliveryService.getCargoDeliveryList(this.search).subscribe(e=>{this.bookingList=e,console.log(e),"FAILED"==this.bookingList.Delivery_BL[0].status&&this.dialog.open(d,{width:"400px",data:{}})})}allClosed(){this.bookingList=null,this.myControl.setValue("",{emitEvent:!1})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.uw),r.Y36(m))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-cargo-delivery"]],decls:44,vars:13,consts:[[1,"d-flex","flex-column","w-100","h-100"],[1,"d-none","d-md-flex","flex-grow-1","overflow-auto","h-100"],[1,"w-50","d-flex","overflow-auto","flex-column"],[1,"d-flex","py-2"],[1,"px-3","d-flex","py-2","align-items-center"],[1,"font-italic","pt-2","cfs-title1","text-danger","bold"],[1,"ml-auto"],[1,"flex-grow-1"],["type","text","aria-label","Number","matInput","","placeholder","HBL/Booking/Bill Of Entry",3,"ngModel","formControl","ngModelChange"],["searchInput",""],["mat-icon-button","",3,"click"],[3,"bookingList","selectedRow",4,"ngIf"],[3,"vertical"],[1,"d-flex","overflow-auto","w-50","flex-column"],[1,"flex-grow-1","overflow-auto",3,"bookingList"],[1,"d-flex","flex-column","d-md-none","h-100","w-100","overflow-auto"],["mat-stretch-tabs","",1,"h-100","devanning-mobile-tab-container","overflow-auto",3,"headerPosition","selectedIndex","selectedIndexChange"],["label","Container",1,"h-100","d-flex","flex-column","overflow-auto"],[1,"bg-white","border-top","p-2","d-flex"],[1,"flex-grow-1","pr-2"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","primary","class","ml-2",3,"click",4,"ngIf"],[1,"d-flex","flex-column","flex-grow-1","overflow-auto"],[1,"flex-grow-1","overflow-auto"],[3,"bookingList",4,"ngIf"],["label","Delivery Item"],[1,"flex-grow-1",3,"bookingList"],[3,"bookingList","selectedRow"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","primary",1,"ml-2",3,"click"],[3,"bookingList"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r._UZ(1,"app-header"),r.TgZ(2,"div",1),r.TgZ(3,"div",2),r.TgZ(4,"div",3),r.TgZ(5,"div",4),r.TgZ(6,"div",5),r._uU(7,"Cargo Delivery"),r.qZA(),r.qZA(),r.TgZ(8,"div",6),r.TgZ(9,"mat-form-field",7),r.TgZ(10,"mat-label"),r._uU(11,"Search"),r.qZA(),r.TgZ(12,"input",8,9),r.NdJ("ngModelChange",function(e){return t.search=e}),r.qZA(),r.qZA(),r.TgZ(14,"button",10),r.NdJ("click",function(){return t.searchBooking()}),r.TgZ(15,"mat-icon"),r._uU(16,"search"),r.qZA(),r.qZA(),r.TgZ(17,"button",10),r.NdJ("click",function(){return t.openBookingNumberScannerPopup(t.bookingSearchFC,"BookingNumber-desktop")}),r.TgZ(18,"mat-icon"),r._uU(19,"qr_code_scanner"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.YNc(20,$,1,1,"app-list-delivery",11),r.qZA(),r._UZ(21,"mat-divider",12),r.TgZ(22,"div",13),r._UZ(23,"app-delivery-details",14),r.qZA(),r.qZA(),r.TgZ(24,"div",15),r.TgZ(25,"mat-tab-group",16),r.NdJ("selectedIndexChange",function(e){return t.tabIndex=e}),r.TgZ(26,"mat-tab",17),r.TgZ(27,"div",18),r.TgZ(28,"div",6),r.TgZ(29,"mat-form-field",19),r.TgZ(30,"mat-label"),r._uU(31,"Search"),r.qZA(),r.TgZ(32,"input",8,9),r.NdJ("ngModelChange",function(e){return t.search=e}),r.qZA(),r.qZA(),r.YNc(34,G,4,0,"button",20),r.YNc(35,K,4,0,"button",21),r.qZA(),r.qZA(),r.TgZ(36,"div",22),r.TgZ(37,"div",23),r.YNc(38,ee,1,1,"app-list-delivery",24),r.qZA(),r.qZA(),r.TgZ(39,"div"),r._UZ(40,"app-delivery-details",7),r.qZA(),r.qZA(),r.TgZ(41,"mat-tab",25),r.TgZ(42,"div"),r._UZ(43,"app-delivery-details",26),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(12),r.Q6J("ngModel",t.search)("formControl",t.myControl),r.xp6(8),r.Q6J("ngIf",t.bookingList),r.xp6(1),r.Q6J("vertical",!0),r.xp6(2),r.Q6J("bookingList",t.bookingList),r.xp6(2),r.Q6J("headerPosition","below")("selectedIndex",t.tabIndex),r.xp6(7),r.Q6J("ngModel",t.search)("formControl",t.myControl),r.xp6(2),r.Q6J("ngIf",!t.showMobileBookingSearch),r.xp6(1),r.Q6J("ngIf",!t.showMobileBookingSearch),r.xp6(3),r.Q6J("ngIf",t.bookingList),r.xp6(5),r.Q6J("bookingList",t.bookingList))},directives:[h.G,f.KE,f.hX,Z.Nt,a.Fj,a.JJ,a.oH,s.lW,v.Hw,o.O5,b.d,R,V.SP,V.uX,X],styles:[".devanning-mobile-tab-container .mat-tab-body-wrapper{flex-grow:1}  .devanning-mobile-tab-container .mat-tab-body-content{display:flex;flex-direction:column}"]}),e})()}];let ie=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[n.Bz.forChild(te)],n.Bz]}),e})();var oe=i(4885),ne=(i(9238),i(9490),i(521),i(2458)),ae=(i(5319),i(9765),i(1439),i(6682),i(5917),i(2759),i(625)),le=i(9243);i(6461),i(7636),i(5257),i(3190),i(5435),i(8307),i(1289),i(946);const re={provide:new r.OlP("mat-autocomplete-scroll-strategy"),deps:[ae.aV],useFactory:function(e){return()=>e.scrollStrategies.reposition()}};let se=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[re],imports:[[ae.U8,ne.Ng,ne.BQ,o.ez],le.ZD,ne.Ng,ne.BQ]}),e})();var ce=i(2613),de=i(171),ge=i(4466);let ue=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[o.ez,ie,ge.m,b.t,v.Ps,f.lN,H.QW,J.p0,S.Cv,c.Is,de.To,s.ot,q.LD,a.UX,a.u5,ce.Fk,Z.c,k.ZX,V.Nh,se,oe.Cq]]}),e})()}}]);