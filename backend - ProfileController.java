import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @GetMapping
    public String getProfile() {
        return "Profile Data";
    }

    @PutMapping
    public String updateProfile() {
        return "Profile Updated";
    }

    @PutMapping("/change-password")
    public String changePassword() {
        return "Password Changed";
    }
}