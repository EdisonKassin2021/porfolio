import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ImagePreviewProps {
  imageUrl: string;
  imageAlt: string;
}
const ImagePreview = ({ imageUrl, imageAlt }: ImagePreviewProps) => {
  return (
    <Card>
      <CardMedia component="img" alt={imageAlt} height="200" image={imageUrl} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {imageAlt}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImagePreview;
