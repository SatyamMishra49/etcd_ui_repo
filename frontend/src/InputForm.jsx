import * as React from "react";
import {
    Box,
    Button,
    Checkbox,
    CssBaseline,
    FormControl,
    FormControlLabel,
    FormLabel,
    Link,
    TextField,
    Typography,
    Card,
    Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { styled } from "@mui/material/styles";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import logo from "./assets/mesh.io.svg";

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 480,
    width: "100%",
    margin: "auto",
    padding: theme.spacing(4),
    borderRadius: 16,
    boxShadow: theme.shadows[3],
}));

export default function SignUpForm() {
    return (
        <>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ffffff",
                    padding: 2,
                }}
            >
                <StyledCard>
                    {/* Logo and Title */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            mb: 2,
                            gap: 1,
                        }}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: 50, height: 50 }}
                        />
                        <Typography variant="h6" fontWeight="bold">
                            mesh.io
                        </Typography>
                    </Box>

                    {/* Header Text */}
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                        Hello There!
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3 }}>
                        Click here to learn more.{" "}
                        <Link href="#" underline="hover">
                            FAQs
                        </Link>
                    </Typography>

                    {/* Form */}
                    <Box component="form" noValidate autoComplete="off">
                        <Grid container spacing={2}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Required"
                            />
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Required"
                            />
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Required"
                            />
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Required"
                            />
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Required"
                            />
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={
                                        <Typography variant="body2">
                                            Check to indicate that you agree to
                                            the{" "}
                                            <Link
                                                href="#"
                                                underline="hover"
                                                color="primary"
                                            >
                                                Terms of Service
                                            </Link>{" "}
                                            and{" "}
                                            <Link
                                                href="#"
                                                underline="hover"
                                                color="primary"
                                            >
                                                Privacy Policy
                                            </Link>
                                            .
                                        </Typography>
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="center">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                        sx={{
                                            fontWeight: "bold",
                                            backgroundColor: "#00695c",
                                            "&:hover": {
                                                backgroundColor: "#1de9b6",
                                            },
                                        }}
                                    >
                                        SEND
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </StyledCard>
            </Box>
        </>
    );
}
