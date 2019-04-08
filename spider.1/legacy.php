<?php
require "header.php"
?>
<script src='js/fire/index.js'></script>
<script src="https://js.stripe.com/v2/"></script>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <link rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
 
<main role="main" class="container">
      <div class="jumbotron">
<div class="lead" class="mx-auto w-auto p-3" style="width:100%">
        <h1 class="mx-auto text-left">Legacy Membership</h1>
        <div><h2 class=" " style="width:100%">9.99/month</h2>
        <form class="d-inline" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="XK6HP3LVDAY2J">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribe_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
        </div>
        <p>A bigger better brighter internet and a cooler you.</p>       
    <div class="text-center" style="margin-left:10%" height="100%" width="100%">
        <svg class="text-center " height="190" width="100%" 
     preserveAspectRatio="xMinYMax meet"
     aria-label="spider" viewBox="160 50 290 230" role="img" 
    style="">
   <title>Image of a friendly spider</title>
     <defs>
        <title>eyes of the spider</title>
        <circle id="eyes" cy="155" r="48"/>
        <title>smaller eyes of the spider</title>
        <circle id="minieyes" r="6" stroke="black" fill="grey" strokewidth="1"/>    
    </defs>
         <g class="legs" stroke="green" stroke-width="6" fill="blue">
    <!--rightside -->
    <title>legs</title>
        <path d="M 350,204
                     c 60 -300, 50 -60,  20  5,
                     q -10,40 -20,-5 z"/> 
           <path d="M 380,74
                     c 70 400, 60 100,  30  5,
                     q -20,-40 -30,-5 z"/>
    <!-- leftside-->
       <path d="M 250,204
                     c -60 -300, -50 -60,  -20  5,
                     q 10,40 20,-5 z"/>
           <path d="M 220,74
                     c -70 400, -60 100,  -30  5,
                     q 20,-40 30,-5 z"/>
            </g>
     <!--this is where the big eyes live-->
         <polygon points="230,190 300,120 370,190" style="fill:lime;stroke:purple;stroke-width:8" />
            <g stroke="black" stroke-width="2">
            <use xlink:href="#eyes" x="250" fill="white"/>
             <use xlink:href="#eyes" x="350" fill="white"/>
            </g>
            <!--left eye grid-->
            <!-- these are the small eyes-->
            <g>     
                <!--this is the left side-->
              <use xlink:href="#minieyes" x="250" y="177"/>
              <use xlink:href="#minieyes" x="266" y="162"/>
              <use xlink:href="#minieyes" x="230" y="169"/>
              <use xlink:href="#minieyes" x="240" y="190"/>
              <use xlink:href="#minieyes" x="272" y="182"/>
              <!--this is the right side-->
              <use xlink:href="#minieyes" x="365" y="165"/>   
              <use xlink:href="#minieyes" x="337" y="170"/> 
              <use xlink:href="#minieyes" x="355" y="180"/> 
              <use xlink:href="#minieyes" x="375" y="185"/> 
              <use xlink:href="#minieyes" x="342" y="192"/> 
            </g>
    <!-- this is the right pincer original-->
                <g id="rightPincer" stroke="blue" stroke-width="4" fill="black">  
                     <path d="M310,215
                     q 45,-45 74,-30
                     q 10,30 -74,30 z">
                     <animate id="animation1"
                       attributeName="d"
                       attributeType="XML"
                       from="M 325,185
                     q 75,-25 77,20
                     q -8,20 -77,-20 z"
                       to="M 310,225
                     q 45,-45 74,-30
                     q 10,30 -74,30  z" 
                       begin="0;animation3.end" dur="1.5s"
                       />
                       <animate id="animation2"
                       attributeName="d"
                       attributeType="XML"
                        begin="animation1.end"
                        from="M 310,225
                       q 45,-45 74,-30
                        q 10,30 -74,30  z"
                       to="M 327,218
                        q 45,-45 74,-30
                       q 10,30 -74,30  z"
                       dur="1s" />
                       <animate id="animation3"
                       attributeName="d"
                       attributeType="XML"
                        begin="animation2.end"
                        from="M 327,218
                     q 45,-45 74,-30
                     q 10,30 -74,30 z"
                       to="M 325,185
                     q 75,-25 77,20
                     q -8,20 -77,-20 z"
                       dur="1s" />        
                     
                   </path>
                </g>


            <g id="leftPincer" stroke="blue" stroke-width="4" fill="black">
                <path d="M 198,208
                     q 10,-30 77,20
                     q-80,10 -77,-20 z">
                
                 <animate id="animation1b"
                   attributeName="d"
                   attributeType="XML"
                   from="M 198,208
                     q 10,-30 77,20
                     q-80,10 -77,-20 z"
                   to="M 203, 195
                   q -15,-30 77,-20
                   q -40,40 -77,20 z" 
                   begin="0;animation3b.end" dur="1s"/>

                   <animate id="animation2b"
                   attributeName="d"
                   attributeType="XML"
                    begin="animation1b.end"
                    from="M 203,195
                    q -15,-30 77,-20 
                    q -40,40 -77,20 z"
                   to="M 215,208
                     q 20,-30 79,10
                     q-85,20 -79,-10 z"
                   dur="1.5s" />

                   <animate id="animation3b"
                   attributeName="d"
                   attributeType="XML"
                    begin="animation2b.end"
                    from="M215,208
                     q 20,-30 79,10
                     q-85,20 -79,-10 z"
                   to=" M 198,208
                     q 10,-30 77,20
                     q-80,10 -77,-20z"
                   dur="1s" />
               </path>

    </svg>

</div>
          <div class="container-fluid">
    <div class="col">
    <div class="row"><p>As a legacy member you will always hold a special place in our heart. 
    We do not know what the future holds but as an early adopter you will recieve special perks. </p></div>
    <div class=" d-inline row"><a href="free.php"><button class="btn btn-secondary btn-block ">Free</button></a></div><div class="row"><p>If thats not your thing you can check out the free one.  Free membership has a global search limit of 99.
     If you recieve an error the query limit may have been reached. </p></div><div class="row"><p> Consider signing up to 
     support the arts, an idea, and a meaningful future. This technology has yet to fully realized
     but think about how it could help a child learn to explore. Imagine sharing a web of content 
     with a friend to exchange thoughts, that shows the links you made instead of one misinterpreted tweet. 
     The beauty of a library, and the natural world
     are realized on the journey not in a list view. 
     The path you choose to take should be your own unobstructed by algorithms and ads. to be fair 
     nobody wants spam but i think we will eventually find a happy balance. 

  </div>
    
  </div>

  <br>
  <br>
 
      </div>
    </main>




</div>


    

</main>


<?php
    require "footer.php"
?>
