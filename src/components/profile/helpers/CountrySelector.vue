<template>
  <div class="countries">
    <select name="country" id="country" @change="sendUserCountry" v-model="country">
      <option value="" label="Select a country … " selected="selected">Select a country …       </option>
      <optgroup id="country-optgroup-Africa" label="Africa">
        <option value="Algeria" label="Algeria" v-model="country" @input="sendUserCountry">Algeria</option>
        <option value="Angola" label="Angola" v-model="country" @input="sendUserCountry">Angola</option>
        <option value="Benin" label="Benin" v-model="country" @input="sendUserCountry">Benin</option>
        <option value="Botswana" label="Botswana" v-model="country" @input="sendUserCountry">Botswana</option>
        <option value="Burkina Faso" label="Burkina Faso" v-model="country" @input="sendUserCountry">Burkina Faso</option>
        <option value="Burundi" label="Burundi" v-model="country" @input="sendUserCountry">Burundi</option>
        <option value="Cameroon" label="Cameroon" v-model="country" @input="sendUserCountry">Cameroon</option>
        <option value="Cape Verde" label="Cape Verde" v-model="country" @input="sendUserCountry">Cape Verde</option>
        <option value="Central African Republic" label="Central African Republic" v-model="country" @input="sendUserCountry">Central African Republic</option>
        <option value="Chad" label="Chad" v-model="country" @input="sendUserCountry">Chad</option>
        <option value="Comoros" label="Comoros" v-model="country" @input="sendUserCountry">Comoros</option>
        <option value="Congo - Brazzaville" label="Congo - Brazzaville" v-model="country" @input="sendUserCountry">Congo - Brazzaville</option>
        <option value="Congo - Kinshasa" label="Congo - Kinshasa" v-model="country" @input="sendUserCountry">Congo - Kinshasa</option>
        <option value="Côte d’Ivoire" label="Côte d’Ivoire" v-model="country" @input="sendUserCountry">Côte d’Ivoire</option>
        <option value="Djibouti" label="Djibouti" v-model="country" @input="sendUserCountry">Djibouti</option>
        <option value="Egypt" label="Egypt" v-model="country" @input="sendUserCountry">Egypt</option>
        <option value="Equatorial Guinea" label="Equatorial Guinea" v-model="country" @input="sendUserCountry">Equatorial Guinea</option>
        <option value="Eritrea" label="Eritrea" v-model="country" @input="sendUserCountry">Eritrea</option>
        <option value="Ethiopia" label="Ethiopia" v-model="country" @input="sendUserCountry">Ethiopia</option>
        <option value="Gabon" label="Gabon" v-model="country" @input="sendUserCountry">Gabon</option>
        <option value="Gambia" label="Gambia" v-model="country" @input="sendUserCountry">Gambia</option>
        <option value="Ghana" label="Ghana" v-model="country" @input="sendUserCountry">Ghana</option>
        <option value="Guinea" label="Guinea" v-model="country" @input="sendUserCountry">Guinea</option>
        <option value="Guinea-Bissau" label="Guinea-Bissau" v-model="country" @input="sendUserCountry">Guinea-Bissau</option>
        <option value="Kenya" label="Kenya" v-model="country" @input="sendUserCountry">Kenya</option>
        <option value="Lesotho" label="Lesotho" v-model="country" @input="sendUserCountry">Lesotho</option>
        <option value="Liberia" label="Liberia" v-model="country" @input="sendUserCountry">Liberia</option>
        <option value="Libya" label="Libya" v-model="country" @input="sendUserCountry">Libya</option>
        <option value="Madagascar" label="Madagascar" v-model="country" @input="sendUserCountry">Madagascar</option>
        <option value="Malawi" label="Malawi" v-model="country" @input="sendUserCountry">Malawi</option>
        <option value="Mali" label="Mali" v-model="country" @input="sendUserCountry">Mali</option>
        <option value="Mauritania" label="Mauritania" v-model="country" @input="sendUserCountry">Mauritania</option>
        <option value="Mauritius" label="Mauritius" v-model="country" @input="sendUserCountry">Mauritius</option>
        <option value="Mayotte" label="Mayotte" v-model="country" @input="sendUserCountry">Mayotte</option>
        <option value="Morocco" label="Morocco" v-model="country" @input="sendUserCountry">Morocco</option>
        <option value="Mozambique" label="Mozambique" v-model="country" @input="sendUserCountry">Mozambique</option>
        <option value="Namibia" label="Namibia" v-model="country" @input="sendUserCountry">Namibia</option>
        <option value="Niger" label="Niger" v-model="country" @input="sendUserCountry">Niger</option>
        <option value="Nigeria" label="Nigeria" v-model="country" @input="sendUserCountry">Nigeria</option>
        <option value="Rwanda" label="Rwanda" v-model="country" @input="sendUserCountry">Rwanda</option>
        <option value="Réunion" label="Réunion" v-model="country" @input="sendUserCountry">Réunion</option>
        <option value="Saint Helena" label="Saint Helena" v-model="country" @input="sendUserCountry">Saint Helena</option>
        <option value="Senegal" label="Senegal" v-model="country" @input="sendUserCountry">Senegal</option>
        <option value="Seychelles" label="Seychelles" v-model="country" @input="sendUserCountry">Seychelles</option>
        <option value="Sierra Leone" label="Sierra Leone" v-model="country" @input="sendUserCountry">Sierra Leone</option>
        <option value="Somalia" label="Somalia" v-model="country" @input="sendUserCountry">Somalia</option>
        <option value="South Africa" label="South Africa" v-model="country" @input="sendUserCountry">South Africa</option>
        <option value="Sudan" label="Sudan" v-model="country" @input="sendUserCountry">Sudan</option>
        <option value="Swaziland" label="Swaziland" v-model="country" @input="sendUserCountry">Swaziland</option>
        <option value="São Tomé and Príncipe" label="São Tomé and Príncipe" v-model="country" @input="sendUserCountry">São Tomé and Príncipe</option>
        <option value="Tanzania" label="Tanzania" v-model="country" @input="sendUserCountry">Tanzania</option>
        <option value="Togo" label="Togo" v-model="country" @input="sendUserCountry">Togo</option>
        <option value="Tunisia" label="Tunisia" v-model="country" @input="sendUserCountry">Tunisia</option>
        <option value="Uganda" label="Uganda" v-model="country" @input="sendUserCountry">Uganda</option>
        <option value="Western Sahara" label="Western Sahara" v-model="country" @input="sendUserCountry">Western Sahara</option>
        <option value="Zambia" label="Zambia" v-model="country" @input="sendUserCountry">Zambia</option>
        <option value="Zimbabwe" label="Zimbabwe" v-model="country" @input="sendUserCountry">Zimbabwe</option>
      </optgroup>
      <optgroup id="country-optgroup-Americas" label="Americas">
        <option value="Anguilla" label="Anguilla" v-model="country" @input="sendUserCountry">Anguilla</option>
        <option value="Antigua and Barbuda" label="Antigua and Barbuda" v-model="country" @input="sendUserCountry">Antigua and Barbuda</option>
        <option value="Argentina" label="Argentina" v-model="country" @input="sendUserCountry">Argentina</option>
        <option value="Aruba" label="Aruba" v-model="country" @input="sendUserCountry">Aruba</option>
        <option value="Bahamas" label="Bahamas" v-model="country" @input="sendUserCountry">Bahamas</option>
        <option value="Barbados" label="Barbados" v-model="country" @input="sendUserCountry">Barbados</option>
        <option value="Belize" label="Belize" v-model="country" @input="sendUserCountry">Belize</option>
        <option value="Bermuda" label="Bermuda" v-model="country" @input="sendUserCountry">Bermuda</option>
        <option value="Bolivia" label="Bolivia" v-model="country" @input="sendUserCountry">Bolivia</option>
        <option value="Brazil" label="Brazil" v-model="country" @input="sendUserCountry">Brazil</option>
        <option value="British Virgin Islands" label="British Virgin Islands" v-model="country" @input="sendUserCountry">British Virgin Islands</option>
        <option value="Canada" label="Canada" v-model="country" @input="sendUserCountry">Canada</option>
        <option value="Cayman Islands" label="Cayman Islands" v-model="country" @input="sendUserCountry">Cayman Islands</option>
        <option value="Chile" label="Chile" v-model="country" @input="sendUserCountry">Chile</option>
        <option value="Colombia" label="Colombia" v-model="country" @input="sendUserCountry">Colombia</option>
        <option value="Costa Rica" label="Costa Rica" v-model="country" @input="sendUserCountry">Costa Rica</option>
        <option value="Cuba" label="Cuba" v-model="country" @input="sendUserCountry">Cuba</option>
        <option value="Dominica" label="Dominica" v-model="country" @input="sendUserCountry">Dominica</option>
        <option value="Dominican Republic" label="Dominican Republic" v-model="country" @input="sendUserCountry">Dominican Republic</option>
        <option value="Ecuador" label="Ecuador" v-model="country" @input="sendUserCountry">Ecuador</option>
        <option value="El Salvador" label="El Salvador" v-model="country" @input="sendUserCountry">El Salvador</option>
        <option value="Falkland Islands" label="Falkland Islands" v-model="country" @input="sendUserCountry">Falkland Islands</option>
        <option value="French Guiana" label="French Guiana" v-model="country" @input="sendUserCountry">French Guiana</option>
        <option value="Greenland" label="Greenland" v-model="country" @input="sendUserCountry">Greenland</option>
        <option value="Grenada" label="Grenada" v-model="country" @input="sendUserCountry">Grenada</option>
        <option value="Guadeloupe" label="Guadeloupe" v-model="country" @input="sendUserCountry">Guadeloupe</option>
        <option value="Guatemala" label="Guatemala" v-model="country" @input="sendUserCountry">Guatemala</option>
        <option value="Guyana" label="Guyana" v-model="country" @input="sendUserCountry">Guyana</option>
        <option value="Haiti" label="Haiti" v-model="country" @input="sendUserCountry">Haiti</option>
        <option value="Honduras" label="Honduras" v-model="country" @input="sendUserCountry">Honduras</option>
        <option value="Jamaica" label="Jamaica" v-model="country" @input="sendUserCountry">Jamaica</option>
        <option value="Martinique" label="Martinique" v-model="country" @input="sendUserCountry">Martinique</option>
        <option value="Mexico" label="Mexico" v-model="country" @input="sendUserCountry">Mexico</option>
        <option value="Montserrat" label="Montserrat" v-model="country" @input="sendUserCountry">Montserrat</option>
        <option value="Netherlands Antilles" label="Netherlands Antilles" v-model="country" @input="sendUserCountry">Netherlands Antilles</option>
        <option value="Nicaragua" label="Nicaragua" v-model="country" @input="sendUserCountry">Nicaragua</option>
        <option value="Panamá" label="Panamá" v-model="country" @input="sendUserCountry">Panama</option>
        <option value="Paraguay" label="Paraguay" v-model="country" @input="sendUserCountry">Paraguay</option>
        <option value="Perú" label="Perú" v-model="country" @input="sendUserCountry">Peru</option>
        <option value="Puerto Rico" label="Puerto Rico" v-model="country" @input="sendUserCountry">Puerto Rico</option>
        <option value="Saint Barthélemy" label="Saint Barthélemy" v-model="country" @input="sendUserCountry">Saint Barthélemy</option>
        <option value="Saint Kitts and Nevis" label="Saint Kitts and Nevis" v-model="country" @input="sendUserCountry">Saint Kitts and Nevis</option>
        <option value="Saint Lucia" label="Saint Lucia" v-model="country" @input="sendUserCountry">Saint Lucia</option>
        <option value="Saint Martin" label="Saint Martin" v-model="country" @input="sendUserCountry">Saint Martin</option>
        <option value="Saint Pierre and Miquelon" label="Saint Pierre and Miquelon" v-model="country" @input="sendUserCountry">Saint Pierre and Miquelon</option>
        <option value="Saint Vincent and the Grenadines" label="Saint Vincent and the Grenadines" v-model="country" @input="sendUserCountry">Saint Vincent and the Grenadines</option>
        <option value="Suriname" label="Suriname" v-model="country" @input="sendUserCountry">Suriname</option>
        <option value="Trinidad and Tobago" label="Trinidad and Tobago" v-model="country" @input="sendUserCountry">Trinidad and Tobago</option>
        <option value="Turks and Caicos Islands" label="Turks and Caicos Islands" v-model="country" @input="sendUserCountry">Turks and Caicos Islands</option>
        <option value="U.S. Virgin Islands" label="U.S. Virgin Islands" v-model="country" @input="sendUserCountry">U.S. Virgin Islands</option>
        <option value="United States" label="United States" v-model="country" @input="sendUserCountry">United States</option>
        <option value="Uruguay" label="Uruguay" v-model="country" @input="sendUserCountry">Uruguay</option>
        <option value="Venezuela" label="Venezuela" v-model="country" @input="sendUserCountry">Venezuela</option>
      </optgroup>
      <optgroup id="country-optgroup-Asia" label="Asia">
        <option value="Afghanistan" label="Afghanistan" v-model="country" @input="sendUserCountry">Afghanistan</option>
        <option value="Armenia" label="Armenia" v-model="country" @input="sendUserCountry">Armenia</option>
        <option value="Azerbaijan" label="Azerbaijan" v-model="country" @input="sendUserCountry">Azerbaijan</option>
        <option value="Bahrain" label="Bahrain" v-model="country" @input="sendUserCountry">Bahrain</option>
        <option value="Bangladesh" label="Bangladesh" v-model="country" @input="sendUserCountry">Bangladesh</option>
        <option value="Bhutan" label="Bhutan" v-model="country" @input="sendUserCountry">Bhutan</option>
        <option value="Brunei" label="Brunei" v-model="country" @input="sendUserCountry">Brunei</option>
        <option value="Cambodia" label="Cambodia" v-model="country" @input="sendUserCountry">Cambodia</option>
        <option value="China" label="China" v-model="country" @input="sendUserCountry">China</option>
        <option value="Cyprus" label="Cyprus" v-model="country" @input="sendUserCountry">Cyprus</option>
        <option value="Georgia" label="Georgia" v-model="country" @input="sendUserCountry">Georgia</option>
        <option value="Hong Kong SAR China" label="Hong Kong SAR China" v-model="country" @input="sendUserCountry">Hong Kong SAR China</option>
        <option value="India" label="India" v-model="country" @input="sendUserCountry">India</option>
        <option value="Indonesia" label="Indonesia" v-model="country" @input="sendUserCountry">Indonesia</option>
        <option value="Iran" label="Iran" v-model="country" @input="sendUserCountry">Iran</option>
        <option value="Iraq" label="Iraq" v-model="country" @input="sendUserCountry">Iraq</option>
        <option value="Israel" label="Israel" v-model="country" @input="sendUserCountry">Israel</option>
        <option value="Japan" label="Japan" v-model="country" @input="sendUserCountry">Japan</option>
        <option value="Jordan" label="Jordan" v-model="country" @input="sendUserCountry">Jordan</option>
        <option value="Kazakhstan" label="Kazakhstan" v-model="country" @input="sendUserCountry">Kazakhstan</option>
        <option value="Kuwait" label="Kuwait" v-model="country" @input="sendUserCountry">Kuwait</option>
        <option value="Kyrgyzstan" label="Kyrgyzstan" v-model="country" @input="sendUserCountry">Kyrgyzstan</option>
        <option value="Laos" label="Laos" v-model="country" @input="sendUserCountry">Laos</option>
        <option value="Lebanon" label="Lebanon" v-model="country" @input="sendUserCountry">Lebanon</option>
        <option value="Macau SAR China" label="Macau SAR China" v-model="country" @input="sendUserCountry">Macau SAR China</option>
        <option value="Malaysia" label="Malaysia" v-model="country" @input="sendUserCountry">Malaysia</option>
        <option value="Maldives" label="Maldives" v-model="country" @input="sendUserCountry">Maldives</option>
        <option value="Mongolia" label="Mongolia" v-model="country" @input="sendUserCountry">Mongolia</option>
        <option value="Myanmar [Burma]" label="Myanmar [Burma]" v-model="country" @input="sendUserCountry">Myanmar [Burma]</option>
        <option value="Nepal" label="Nepal" v-model="country" @input="sendUserCountry">Nepal</option>
        <option value="Neutral Zone" label="Neutral Zone" v-model="country" @input="sendUserCountry">Neutral Zone</option>
        <option value="North Korea" label="North Korea" v-model="country" @input="sendUserCountry">North Korea</option>
        <option value="Oman" label="Oman" v-model="country" @input="sendUserCountry">Oman</option>
        <option value="Pakistan" label="Pakistan" v-model="country" @input="sendUserCountry">Pakistan</option>
        <option value="Palestinian Territories" label="Palestinian Territories" v-model="country" @input="sendUserCountry">Palestinian Territories</option>
        <option value="People's Democratic Republic of Yemen" label="People's Democratic Republic of Yemen" v-model="country" @input="sendUserCountry">People's Democratic Republic of Yemen</option>
        <option value="Philippines" label="Philippines" v-model="country" @input="sendUserCountry">Philippines</option>
        <option value="Qatar" label="Qatar" v-model="country" @input="sendUserCountry">Qatar</option>
        <option value="Saudi Arabia" label="Saudi Arabia" v-model="country" @input="sendUserCountry">Saudi Arabia</option>
        <option value="Singapore" label="Singapore" v-model="country" @input="sendUserCountry">Singapore</option>
        <option value="South Korea" label="South Korea" v-model="country" @input="sendUserCountry">South Korea</option>
        <option value="Sri Lanka" label="Sri Lanka" v-model="country" @input="sendUserCountry">Sri Lanka</option>
        <option value="Syria" label="Syria" v-model="country" @input="sendUserCountry">Syria</option>
        <option value="Taiwan" label="Taiwan" v-model="country" @input="sendUserCountry">Taiwan</option>
        <option value="Tajikistan" label="Tajikistan" v-model="country" @input="sendUserCountry">Tajikistan</option>
        <option value="Thailand" label="Thailand" v-model="country" @input="sendUserCountry">Thailand</option>
        <option value="Timor-Leste" label="Timor-Leste" v-model="country" @input="sendUserCountry">Timor-Leste</option>
        <option value="Turkey" label="Turkey" v-model="country" @input="sendUserCountry">Turkey</option>
        <option value="Turkmenistan" label="Turkmenistan" v-model="country" @input="sendUserCountry">Turkmenistan</option>
        <option value="United Arab Emirates" label="United Arab Emirates" v-model="country" @input="sendUserCountry">United Arab Emirates</option>
        <option value="Uzbekistan" label="Uzbekistan" v-model="country" @input="sendUserCountry">Uzbekistan</option>
        <option value="Vietnam" label="Vietnam" v-model="country" @input="sendUserCountry">Vietnam</option>
        <option value="Yemen" label="Yemen" v-model="country" @input="sendUserCountry">Yemen</option>
      </optgroup>
      <optgroup id="country-optgroup-Europe" label="Europe">
        <option value="Albania" label="Albania" v-model="country" @input="sendUserCountry">Albania</option>
        <option value="Andorra" label="Andorra" v-model="country" @input="sendUserCountry">Andorra</option>
        <option value="Austria" label="Austria" v-model="country" @input="sendUserCountry">Austria</option>
        <option value="Belarus" label="Belarus" v-model="country" @input="sendUserCountry">Belarus</option>
        <option value="Belgium" label="Belgium" v-model="country" @input="sendUserCountry">Belgium</option>
        <option value="Bosnia and Herzegovina" label="Bosnia and Herzegovina" v-model="country" @input="sendUserCountry">Bosnia and Herzegovina</option>
        <option value="Bulgaria" label="Bulgaria" v-model="country" @input="sendUserCountry">Bulgaria</option>
        <option value="Croatia" label="Croatia" v-model="country" @input="sendUserCountry">Croatia</option>
        <option value="Cyprus" label="Cyprus" v-model="country" @input="sendUserCountry">Cyprus</option>
        <option value="Czech Republic" label="Czech Republic" v-model="country" @input="sendUserCountry">Czech Republic</option>
        <option value="Denmark" label="Denmark" v-model="country" @input="sendUserCountry">Denmark</option>
        <option value="Estonia" label="Estonia" v-model="country" @input="sendUserCountry">Estonia</option>
        <option value="Faroe Islands" label="Faroe Islands" v-model="country" @input="sendUserCountry">Faroe Islands</option>
        <option value="Finland" label="Finland" v-model="country" @input="sendUserCountry">Finland</option>
        <option value="France" label="France" v-model="country" @input="sendUserCountry">France</option>
        <option value="Germany" label="Germany" v-model="country" @input="sendUserCountry">Germany</option>
        <option value="Gibraltar" label="Gibraltar" v-model="country" @input="sendUserCountry">Gibraltar</option>
        <option value="Greece" label="Greece" v-model="country" @input="sendUserCountry">Greece</option>
        <option value="Guernsey" label="Guernsey" v-model="country" @input="sendUserCountry">Guernsey</option>
        <option value="Hungary" label="Hungary" v-model="country" @input="sendUserCountry">Hungary</option>
        <option value="Iceland" label="Iceland" v-model="country" @input="sendUserCountry">Iceland</option>
        <option value="Ireland" label="Ireland" v-model="country" @input="sendUserCountry">Ireland</option>
        <option value="Isle of Man" label="Isle of Man" v-model="country" @input="sendUserCountry">Isle of Man</option>
        <option value="Italy" label="Italy" v-model="country" @input="sendUserCountry">Italy</option>
        <option value="Jersey" label="Jersey" v-model="country" @input="sendUserCountry">Jersey</option>
        <option value="Latvia" label="Latvia" v-model="country" @input="sendUserCountry">Latvia</option>
        <option value="Liechtenstein" label="Liechtenstein" v-model="country" @input="sendUserCountry">Liechtenstein</option>
        <option value="Lithuania" label="Lithuania" v-model="country" @input="sendUserCountry">Lithuania</option>
        <option value="Luxembourg" label="Luxembourg" v-model="country" @input="sendUserCountry">Luxembourg</option>
        <option value="Macedonia" label="Macedonia" v-model="country" @input="sendUserCountry">Macedonia</option>
        <option value="Malta" label="Malta" v-model="country" @input="sendUserCountry">Malta</option>
        <option value="Moldova" label="Moldova" v-model="country" @input="sendUserCountry">Moldova</option>
        <option value="Monaco" label="Monaco" v-model="country" @input="sendUserCountry">Monaco</option>
        <option value="Montenegro" label="Montenegro" v-model="country" @input="sendUserCountry">Montenegro</option>
        <option value="Netherlands" label="Netherlands" v-model="country" @input="sendUserCountry">Netherlands</option>
        <option value="Norway" label="Norway" v-model="country" @input="sendUserCountry">Norway</option>
        <option value="Poland" label="Poland" v-model="country" @input="sendUserCountry">Poland</option>
        <option value="Portugal" label="Portugal" v-model="country" @input="sendUserCountry">Portugal</option>
        <option value="Romania" label="Romania" v-model="country" @input="sendUserCountry">Romania</option>
        <option value="Russia" label="Russia" v-model="country" @input="sendUserCountry">Russia</option>
        <option value="San Marino" label="San Marino" v-model="country" @input="sendUserCountry">San Marino</option>
        <option value="Serbia" label="Serbia" v-model="country" @input="sendUserCountry">Serbia</option>
        <option value="Slovakia" label="Slovakia" v-model="country" @input="sendUserCountry">Slovakia</option>
        <option value="Slovenia" label="Slovenia" v-model="country" @input="sendUserCountry">Slovenia</option>
        <option value="Spain" label="Spain" v-model="country" @input="sendUserCountry">Spain</option>
        <option value="Svalbard and Jan Mayen" label="Svalbard and Jan Mayen" v-model="country" @input="sendUserCountry">Svalbard and Jan Mayen</option>
        <option value="Sweden" label="Sweden" v-model="country" @input="sendUserCountry">Sweden</option>
        <option value="Switzerland" label="Switzerland" v-model="country" @input="sendUserCountry">Switzerland</option>
        <option value="Ukraine" label="Ukraine" v-model="country" @input="sendUserCountry">Ukraine</option>
        <option value="United Kingdom" label="United Kingdom" v-model="country" @input="sendUserCountry">United Kingdom</option>
        <option value="Vatican City" label="Vatican City" v-model="country" @input="sendUserCountry">Vatican City</option>
        <option value="Åland Islands" label="Åland Islands" v-model="country" @input="sendUserCountry">Åland Islands</option>
      </optgroup>
      <optgroup id="country-optgroup-Oceania" label="Oceania">
        <option value="American Samoa" label="American Samoa" v-model="country" @input="sendUserCountry">American Samoa</option>
        <option value="Antarctica" label="Antarctica" v-model="country" @input="sendUserCountry">Antarctica</option>
        <option value="Australia" label="Australia" v-model="country" @input="sendUserCountry">Australia</option>
        <option value="Bouvet Island" label="Bouvet Island" v-model="country" @input="sendUserCountry">Bouvet Island</option>
        <option value="British Indian Ocean Territory" label="British Indian Ocean Territory" v-model="country" @input="sendUserCountry">British Indian Ocean Territory</option>
        <option value="Christmas Island" label="Christmas Island" v-model="country" @input="sendUserCountry">Christmas Island</option>
        <option value="Cocos [Keeling] Islands" label="Cocos [Keeling] Islands" v-model="country" @input="sendUserCountry">Cocos [Keeling] Islands</option>
        <option value="Cook Islands" label="Cook Islands" v-model="country" @input="sendUserCountry">Cook Islands</option>
        <option value="Fiji" label="Fiji" v-model="country" @input="sendUserCountry">Fiji</option>
        <option value="French Polynesia" label="French Polynesia" v-model="country" @input="sendUserCountry">French Polynesia</option>
        <option value="French Southern Territories" label="French Southern Territories" v-model="country" @input="sendUserCountry">French Southern Territories</option>
        <option value="Guam" label="Guam" v-model="country" @input="sendUserCountry">Guam</option>
        <option value="Heard Island and McDonald Islands" label="Heard Island and McDonald Islands" v-model="country" @input="sendUserCountry">Heard Island and McDonald Islands</option>
        <option value="Kiribati" label="Kiribati" v-model="country" @input="sendUserCountry">Kiribati</option>
        <option value="Marshall Islands" label="Marshall Islands" v-model="country" @input="sendUserCountry">Marshall Islands</option>
        <option value="Micronesia" label="Micronesia" v-model="country" @input="sendUserCountry">Micronesia</option>
        <option value="Nauru" label="Nauru" v-model="country" @input="sendUserCountry">Nauru</option>
        <option value="New Caledonia" label="New Caledonia" v-model="country" @input="sendUserCountry">New Caledonia</option>
        <option value="New Zealand" label="New Zealand" v-model="country" @input="sendUserCountry">New Zealand</option>
        <option value="Niue" label="Niue" v-model="country" @input="sendUserCountry">Niue</option>
        <option value="Norfolk Island" label="Norfolk Island" v-model="country" @input="sendUserCountry">Norfolk Island</option>
        <option value="Northern Mariana Islands" label="Northern Mariana Islands" v-model="country" @input="sendUserCountry">Northern Mariana Islands</option>
        <option value="Palau" label="Palau" v-model="country" @input="sendUserCountry">Palau</option>
        <option value="Papua New Guinea" label="Papua New Guinea" v-model="country" @input="sendUserCountry">Papua New Guinea</option>
        <option value="Pitcairn Islands" label="Pitcairn Islands" v-model="country" @input="sendUserCountry">Pitcairn Islands</option>
        <option value="Samoa" label="Samoa" v-model="country" @input="sendUserCountry">Samoa</option>
        <option value="Solomon Islands" label="Solomon Islands" v-model="country" @input="sendUserCountry">Solomon Islands</option>
        <option value="South Georgia and the South Sandwich Islands" label="South Georgia and the South Sandwich Islands" v-model="country" @input="sendUserCountry">South Georgia and the South Sandwich Islands</option>
        <option value="Tokelau" label="Tokelau" v-model="country" @input="sendUserCountry">Tokelau</option>
        <option value="Tonga" label="Tonga" v-model="country" @input="sendUserCountry">Tonga</option>
        <option value="Tuvalu" label="Tuvalu" v-model="country" @input="sendUserCountry">Tuvalu</option>
        <option value="U.S. Minor Outlying Islands" label="U.S. Minor Outlying Islands" v-model="country" @input="sendUserCountry">U.S. Minor Outlying Islands</option>
        <option value="Vanuatu" label="Vanuatu" v-model="country" @input="sendUserCountry">Vanuatu</option>
        <option value="Wallis and Futuna" label="Wallis and Futuna" v-model="country" @input="sendUserCountry">Wallis and Futuna</option>
      </optgroup>
    </select>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        country: ''
      }
    },
    methods: {
      ...mapActions({
        setUserCountry: 'setUserNationality'
      }),
      sendUserCountry () {
        const country = this.country
        console.log(country)
        this.setUserCountry(country)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .countries {
    select {
      width: 18rem;
      height: 2.2rem;
      padding-left: .7rem;
      font-size: 1rem;
      border: 2px solid #ccc;
      border-radius: 3px;
      background-color: #fff;
    }
    select:focus {
      outline: 0;
      border: 2px solid #48C2AC;
    }
  }
</style>
