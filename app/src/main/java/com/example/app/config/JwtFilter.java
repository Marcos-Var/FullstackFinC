package com.example.app.config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.app.repository.UserRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilter extends OncePerRequestFilter {
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private UserRepository userRepository;
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain) throws ServletException, IOException {
        
        // Extraer el header "Authorization"
        String authHeader = request.getHeader("Authorization");
        String token = null;
        String email = null;
        
        // Verificar si el header tiene el formato: "Bearer TOKEN"
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7); // Quitar "Bearer "
            try {
                email = jwtUtil.extractEmail(token);
            } catch (Exception e) {
                // Token inválido o expirado
                System.out.println("Token inválido: " + e.getMessage());
            }
        }
        
        // Si hay un email válido y el usuario no está autenticado aún
        if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            
            // Verificar que el token sea válido
            if (jwtUtil.isTokenValid(token, email)) {
                
                // Crear un objeto de autenticación para Spring Security
                UsernamePasswordAuthenticationToken authToken = 
                    new UsernamePasswordAuthenticationToken(email, null, null);
                
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                
                // Autenticar al usuario en el contexto de Spring Security
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        
        // Continuar con la cadena de filtros
        filterChain.doFilter(request, response);
    }
}

// 📝 EXPLICACIÓN:
//
// ¿Qué hace este filtro?
// 1. Intercepta TODAS las peticiones HTTP
// 2. Busca el header "Authorization: Bearer TOKEN"
// 3. Extrae el token y valida si es legítimo
// 4. Si es válido, "autentica" al usuario en Spring Security
// 5. Si NO es válido, la petición continúa pero sin autenticación
//
// Flujo:
// Usuario → Petición con header → JwtFilter valida → Spring Security permite/deniega
//
// Ejemplo de header:
// Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyQGV4YW1wbGUuY29tIn0.abc123