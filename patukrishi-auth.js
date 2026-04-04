// patukrishi-auth.js - NEW FILE
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// YOUR SUPABASE CONFIG
const supabaseUrl = 'https://vcmsdjyhjsezwklunidw.supabase.co'
const supabaseKey = 'sb_publishable_Dz_JmUbfRGXYzejzEqq9zg_FO72pKBb'

const supabase = createClient(supabaseUrl, supabaseKey)

// Sign up with Supabase (sends verification email)
export async function signUpWithSupabase(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            emailRedirectTo: window.location.origin + '/verify.html'
        }
    })
    
    if (error) {
        return { success: false, message: error.message }
    }
    return { success: true, message: 'Verification email sent! Check your inbox.' }
}

// Login with Supabase (checks email verification)
export async function loginWithSupabase(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    
    if (error) {
        return { success: false, message: error.message }
    }
    
    // Check if email is verified
    if (!data.user.email_confirmed_at) {
        await supabase.auth.signOut()
        return { success: false, message: 'Please verify your email first. Check your inbox.' }
    }
    
    return { success: true, message: 'Login successful!', user: data.user }
}
