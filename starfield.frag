#define NUM_LAYERS 11.

mat2 Rot(float a) {
    float s=sin(a), c=cos(a);
    return mat2(c, -s, s, c);
}

float Star(vec2 uv, float flare){
    float d = length(uv);
    float m = .05/d;
    
    float rays = max(0.,1.-abs(uv.x*uv.y*1000.));
    m += rays * flare;
    uv *= Rot(3.1415/4.);    
    rays = max(0.,1.-abs(uv.x*uv.y*1000.));
    m += rays * .3 * flare;
    
    m *= smoothstep(1.,.1,d);
    
    return m;
}

float Hash21(vec2 p) {
    p = fract(p*vec2(123.34, 456.21));
    p += dot(p, p+45.32);
    return fract(p.x*p.y);
}

vec3 StarLayer(vec2 uv) {
    
    vec3 col = vec3(0);
    
    vec2 gv = fract(uv)-.5;
    vec2 id = floor(uv);
    
    for(int y=-1;y<=1;y++){
        for(int x=-1;x<=1;x++){
            vec2 offs = vec2(x,y);
            
            float n = Hash21(id+offs);
            float size = fract(n*13.21245);
            float star = Star(gv-offs-vec2(n,fract(n*2323.232323))+.5, smoothstep(.9,1.,size)*.3);
            vec3 color = sin(vec3(.2,.3,.9)*fract(n*12.232)*20.)*.5+.5;
            color = color*vec3(1,0.5,1.+size);
            
            star *=  sin(iTime*.3+n*6.2831)*.5+.5;
            col += star*size*color;
        }
    }
    return col;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord-.5*iResolution.xy)/iResolution.y;
    //uv *= 3.;
    float t = iTime*.01;
    
    uv *= Rot(t);
    vec3 col = vec3(0);

    for(float i=0.; i<1.; i+= 1./NUM_LAYERS){
        float depth = fract(i+t);
        float scale = mix(20., .5, depth);
        float fade = depth*smoothstep(1.,.9,depth);
        col += StarLayer(uv*scale+i*323.23) * fade ;
    }

    fragColor = vec4(col,1.0);
}