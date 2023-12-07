vec3 paletteNeon(float t){
    vec3 a = vec3(0.5,0.5,0.5);
    vec3 b = vec3(0.5,0.5,0.5);
    vec3 c = vec3(1.0,1.0,1.0);
    vec3 d = vec3(0.263,0.416,0.557);
    return a + b*cos(6.28318*(c*t+d));
}

vec3 palettePoison(float t){
    vec3 a = vec3(2.088, 0.500, 0.500);
    vec3 b = vec3(0.608, 0.500, 0.500);
    vec3 c = vec3(1.000, 1.000, 1.000);
    vec3 d = vec3(0.000, 0.333, 0.667);
    return a + b*cos(6.28318*(c*t+d));
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
    vec2 uv0 = uv;
    vec3 finalColour = vec3(0.0);
    
    for (float i = 0.0; i< 2.; i++){
        uv = fract(uv*1.75) - 0.5;

        float d = length(uv) * exp(-length(uv0));

        vec3 col = palettePoison(length(uv0) + i*+.4 + iTime*.2);

        d = sin(d*8. + iTime)/8.;
        d = abs(d);

        d = pow(0.01/d,1.8);

        finalColour += col*d;
    }
    
    fragColor = vec4(finalColour,1.0);
}